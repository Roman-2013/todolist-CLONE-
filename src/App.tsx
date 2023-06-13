import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';


export type ValueFilter = 'Active' | 'All' | 'Completed'


function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'ReactJS', isDone: false},
    ])


    const changeIsDone = (newId: string, newIsDone: boolean) => {
        setTasks( tasks.map(el => el.id === newId ?{...el,isDone:newIsDone } :el))
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])

    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(el => el.id !== id))
    }


    return (
        <div>
            <Todolist
                title={'What to learn'}
                tasks={tasks}
                removeTask={removeTask}
                addTask={addTask}
                changeIsDone={changeIsDone}

            />
        </div>
    )
}


export default App;
