import Button from "./Button.js";import AddBlogForm from "./AddBlogForm.js"

export default function BlogCard({title, body, id, onDelete, onAdd, onShuffle}){
    return (
        <article>
            <h3>{title}</h3>
            <p>{body}</p>
            <Button buttonheadline={title} />
            <button onClick={onDelete}>Delete</button>
            <button onClick={onAdd}>Add one Entry</button>
            <button onClick={onShuffle}>Shuffle Entries</button>

        </article>
    )
    }