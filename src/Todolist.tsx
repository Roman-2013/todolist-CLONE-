import {ValueFilter} from "./App";
import {useState} from "react";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (id: number | string) => void
    //filterTasks: (FValue: ValueFilter) => void

}
type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist(props: PropsType) {


    const [fValueNEW,setFValueNEW]=useState<ValueFilter>('All')

    const filterTasks = (FValue: ValueFilter) => {
        setFValueNEW(FValue)
    }
const drushlagFoo=()=> {
    let drushlag = props.tasks
    if (fValueNEW === "Active") {
         drushlag = props.tasks.filter(el => !el.isDone)
    }
    if (fValueNEW === "Completed") {
          drushlag = props.tasks.filter(el => el.isDone)
    }
    return drushlag
}


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {drushlagFoo().map((el) => {
                return (
                    <li key={el.id}>
                        <button onClick={() => props.removeTask(el.id)}>x</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
        <button onClick={() => filterTasks("All")}>All</button>
        <button onClick={() => filterTasks("Active")}>Active</button>
        <button onClick={() => filterTasks("Completed")}>Completed</button>
    </div>
}