// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import TaskList from "./components/task-list"
import AddTask from './components/add-task';

const url = 'http://localhost:8000/api/tasks/'

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchData = () => {
    axios
    .get(url)
    .then(res => {
      setTasks(res.data)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchData()
    console.log("This ran");
  },[])

  return (
    <div className="App">
      <header className="App-header"> Keeper Clone
      </header>
      <AddTask className="taskadder"/>
      <TaskList data={tasks}/>
    </div>
  );
}

export default App;
