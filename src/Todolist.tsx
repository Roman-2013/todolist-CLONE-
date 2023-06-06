import {ValueFilter} from './App';
import {ChangeEvent,KeyboardEvent, useState} from 'react';
import {Button} from './Components/Button';

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (id: string) => void
    addTask: (title: string) => void

}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export function Todolist(props: PropsType) {
    const [fValueNEW, setFValueNEW] = useState<ValueFilter>('All')
    const filterTasks = (FValue: ValueFilter) => {
        setFValueNEW(FValue)
    }
    const drushlagFoo = () => {
        let drushlag = props.tasks
        if (fValueNEW === 'Active') {
            drushlag = props.tasks.filter(el => !el.isDone)
        }
        if (fValueNEW === 'Completed') {
            drushlag = props.tasks.filter(el => el.isDone)
        }
        return drushlag
    }
    const [newTitle, setnewTitle] = useState('')

    // const filterTasksAllHandler=() => filterTasks('All')
    // const filterTasksActiveHandler=() => filterTasks('Active')
    // const filterTasksCompletedHandler=() => filterTasks('Completed')

    const filterTasksHandler = (value: ValueFilter) => {
        filterTasks(value)
    }
    const removeTaskHandler = (elId: string) => props.removeTask(elId)

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setnewTitle('')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setnewTitle(event.currentTarget.value)
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addTask(newTitle)
            setnewTitle('')
        }
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle}
                   onKeyDown={onKeyDownHandler}
                   onChange={onChangeHandler}/>
            {/*onChange={(event) => {*/}
            {/*           setnewTitle(event.currentTarget.value)*/}
            {/*       }}/>*/}


            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>


            {
                drushlagFoo().map((el) => {
                    // const removeTaskHandler=() => props.removeTask(el.id)
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <Button name={'x'} callBack={() => removeTaskHandler(el.id)}/>
                        </li>
                    )
                })}


        </ul>
        <Button name={'All'} callBack={() => filterTasksHandler('All')}/>
        <Button name={'Active'} callBack={() => filterTasksHandler('Active')}/>
        <Button name={'Completed'} callBack={() => filterTasksHandler('Completed')}/>
        {/*<button onClick={() => filterTasksHandler('All')}>All</button>*/}
        {/*<button onClick={() => filterTasksHandler('Active')}>Active</button>*/}
        {/*<button onClick={() => filterTasksHandler('Completed')}>Completed</button>*/}
    </div>
}