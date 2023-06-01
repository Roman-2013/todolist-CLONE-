import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";


export type ValueFilter="Active"|'All'|"Completed"



function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
    ])

    const removeTask = (id: number | string) => {
        setTasks(tasks.filter(el => el.id !== id))
    }



    // const [fValueNEW,setFValueNEW]=useState<ValueFilter>('All')
    // const filterTasks = (FValue: ValueFilter) => {
    //     setFValueNEW(FValue)
    // }
    //
    // let filteredTasks = tasks
    // if (fValueNEW === "Active") {
    //     filteredTasks = tasks.filter(el => !el.isDone)
    // }
    // if (fValueNEW === "Completed") {
    //     filteredTasks = tasks.filter(el => el.isDone)
    // }



    return (
        <div>
            <Todolist
                title={"What to learn"}
                tasks={tasks}
                removeTask={removeTask}
              //filterTasks={filterTasks}
            />
        </div>
    )
}


export default App;
