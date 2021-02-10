import './App.css';
import BlogCard from "./components/BlogCard.js";
import Button from "./components/Button.js";
import {useState} from "react";
import AddBlogForm from "./components/AddBlogForm";

function App() {
    const [blogEntries, setBlogEntries] = useState([]);
    const randomid = (Math.random()) * 100;

    const BlogEntriesContent = [{
        id: "1",
        name: "Blogeintrag 1",
        content: "this  the content of Blogeintrag 1",
    },
        {
            id: "2",
            name: "Blogeintrag 2",
            content: "this is the content of Blogeintrag 2",
        },
        {
            id: "3",
            name: "Blogeintrag 3",
            content: "this is the content of Blogeintrag 3",
        }];


    return (
        <div className="App">
            <h1>Blog 3000</h1>

            <AddBlogForm onAddBlog={newBlogEntry =>
                setBlogEntries([...blogEntries, newBlogEntry])}/>

            <Button onClick={() => console.log("Ich wurde geklickt")} primary
                    buttonheadline="Ich bin ein primary Button"/>

            {blogEntries.map(blogEntry => <BlogCard
                key={blogEntry.id}
                headline={blogEntry.name}
                content={blogEntry.content}
                onDelete={() => {
                    const updatedList = blogEntries.filter(item => item.id !== blogEntry.id);
                    setBlogEntries(updatedList);
                }}
                onAdd={() => {
                    const updatedList = [...blogEntries, {
                        id: {randomid},
                        name: "neuer Blogeintrag",
                        content: "Hier ist der Inhalt dafür"
                    }];
                    setBlogEntries(updatedList);
                }}
                onShuffle={() => {
                    const updatedList = blogEntries.reverse(blogEntries);
                    setBlogEntries(updatedList);
                }}

            />)}

            <button onClick={() => setBlogEntries(BlogEntriesContent)}>Ich bin der neue Button</button>
        </div>


    )

}

export default App;
