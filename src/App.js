import './App.css';
import BlogCard from "./components/BlogCard.js";
import Button from "./components/Button.js";
import {useState} from "react";
import AddBlogForm from "./components/AddBlogForm";
import axios from "axios";

function App() {
    const [blogEntries, setBlogEntries] = useState([]);
    const randomid = (Math.random()) * 100;

    const BlogEntriesContent = [{
        id: "1",
        title: "Blogeintrag 1",
        body: "this  the content of Blogeintrag 1",
    },
        {
            id: "2",
            title: "Blogeintrag 2",
            body: "this is the content of Blogeintrag 2",
        },
        {
            id: "3",
            title: "Blogeintrag 3",
            body: "this is the content of Blogeintrag 3",
        }];


    return (
        <div className="App">
            <h1>Blog 3000</h1>

            <AddBlogForm onAddBlog={newBlogEntry =>
                setBlogEntries([...blogEntries, newBlogEntry])}/>

            <Button onClick={() => console.log("Ich wurde geklickt")} primary
                    buttonheadline="Ich bin ein primary Button"/>

            <button onClick={() =>
                setBlogEntries([])
            }> Delete all Entries
            </button>

            <button className="axiosButton" onClick={SetBlogEntriesWithAxios}>
                Ich erstelle 100 Blogeinträge von JsonPlaceholder API
            </button>


            {blogEntries.map(blogEntry => <BlogCard
                key={blogEntry.id}
                title={blogEntry.title}
                body={blogEntry.body}
                onDelete={() => {
                    const updatedList = blogEntries.filter(item => item.id !== blogEntry.id);
                    setBlogEntries(updatedList);
                }}
                onAdd={() => {
                    const updatedList = [...blogEntries, {
                        id: {randomid},
                        title: "neuer Blogeintrag",
                        body: "Hier ist der Inhalt dafür"
                    }];
                    setBlogEntries(updatedList);
                }}
            />)}

            <button onClick={() => setBlogEntries(BlogEntriesContent)}>
                Ich erzeuge die vordefinierten Blogeinträge
            </button>
        </div>
    )

    function SetBlogEntriesWithAxios() {
        const responsePromise = axios.get('https://jsonplaceholder.typicode.com/posts')
        responsePromise.then(response => {
            setBlogEntries(response.data)
        });
    }

}

export default App;
