import Button from "./Button.js";import AddBlogForm from "./AddBlogForm.js"

export default function BlogCard({headline, content, id, onDelete, onAdd, onShuffle}){
    return (
        <article>
            <h3>{headline}</h3>
            <p>{content}</p>
            <Button buttonheadline={headline} />
            <button onClick={onDelete}>Delete</button>
            <button onClick={onAdd}>Add one Entry</button>
            <button onClick={onShuffle}>Shuffle Entries</button>

        </article>
    )
    }