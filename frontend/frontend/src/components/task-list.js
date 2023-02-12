import {memo} from "react";

const TaskList = (props) => {
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
                        <input type="checkbox" checked={item.status} readOnly/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default memo(TaskList);