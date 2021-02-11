import {v4 as uuidv4} from 'uuid';
import {useState} from "react";


function AddBlogForm({onAddBlog}) {

    const [title, setTitle] = useState("some name");
    const [body, setBody] = useState("some content");

    return <form onSubmit={event => {
        event.preventDefault()
        onAddBlog({id: uuidv4(), title: title, body: body})
        setTitle("new default text")
        setBody("")
    }}>

        <input value={title} onChange={event => setTitle(event.target.value)}/>

        <button>Add new blog entree </button>
    </form>

}

export default AddBlogForm