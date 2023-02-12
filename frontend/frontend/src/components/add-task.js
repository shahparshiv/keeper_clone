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
        event.preventDefault()
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
        <div>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
            <label>Title: 
            <input type="text" 
                onChange={(e)=> setTitle(e.target.value)} 
                value={title}/>
            </label>
            <label>Description: 
            <input type="text" 
                className="desctextbox"
                onChange={(e)=>setDesc(e.target.value)}
                value={desc}
            />
            </label>
            <input type="submit"/>
            </form>
            <hr />
        </div>
    )
}

export default AddTask;