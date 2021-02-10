import {v4 as uuidv4} from 'uuid';
import {useState} from "react";


function AddBlogForm({onAddBlog}) {

    const [name, setName] = useState("some name");
    const [content, setContent] = useState("some content");

    return <form onSubmit={event => {
        event.preventDefault()
        onAddBlog({id: uuidv4(), name: name, content: content})
        setName("new default text")
        setContent("")
    }}>

        <input value={name} onChange={event => setName(event.target.value)}/>

        <button>Add new blog entree </button>
    </form>

}

export default AddBlogForm