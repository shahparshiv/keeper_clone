import axios from "axios";
import {memo, useState} from "react";
const update_url = 'http://localhost:8000/api/task_update/'

const TaskList = (props) => {
    const [status, setStatus] = useState(false)

const updateStatus = (event) => {
    setStatus(true)
    const pk = event.target.id
    console.log(status,event.target.id);
    const data = {
        pk,
        status
    }
    axios
    .post(update_url,data)
    .then(res => {
        console.log(data)
    }) 
    .catch((err)=>console.log(err))
}
    console.log('tasks',props.data);
    const {data} = props
    return (
        <div>
            <h3>ToDo Tasks</h3>
            <div>
                {data.map((item)=>{
                    return <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        {
                        item.status ?
                            <p>Task completed!!</p> :
                            <button id={item.id} onClick={updateStatus} value={item.status}>Complete</button>                        
                        }
                    </div>
                })}
            </div>
        </div>
    )
}

export default memo(TaskList);