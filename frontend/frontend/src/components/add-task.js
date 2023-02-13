import {useState} from "react";
import "./add-task.css"
import axios from "axios";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    // const updateTitle = (event) => {
    //     setTitle(event.target.value)
    // }

    const url = 'http://localhost:8000/api/tasks/'

    const handleSubmit = (event) => {
        const data = {
            title,
            description: desc
        }
        axios
        .post(url, data)
        .then(res => {
            console.log(data)
        }) 
        .catch((err)=>console.log(err))
    }

    return (
        <div class="new-task-card">
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
            {/* <label>Title:</label>  */}
            <input type="text" 
                class="title-input"
                onChange={(e)=> setTitle(e.target.value)} 
                placeholder="Title"
                value={title}/>
            {/* <label>Description:</label>  */}
            <textarea type="text" 
                className="desctextbox"
                onChange={(e)=>setDesc(e.target.value)}
                value={desc}
                placeholder="Description"
            />
            <input class="submit-button" type="submit" value="Add Task"/>
            </form>
        </div>
    )
}

export default AddTask;