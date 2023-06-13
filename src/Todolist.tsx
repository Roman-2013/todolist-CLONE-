import {ValueFilter} from './App';
import {ChangeEvent,KeyboardEvent, useState} from 'react';
import {Button} from './Components/Button';


type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeIsDone:(newId:string,newIsDone:boolean)=>void

}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export function Todolist(props: PropsType) {
    const [fValueNEW, setFValueNEW] = useState<ValueFilter>('All')
    const [error,setError]=useState<string|null>('')
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


    const filterTasksHandler = (value: ValueFilter) => {
        filterTasks(value)
    }
    const removeTaskHandler = (elId: string) => props.removeTask(elId)

    const addTaskHandler = () => {
        if(newTitle.trim()){
            props.addTask(newTitle.trim())
            setnewTitle('')
        }else{
            setError("Title is recuared")
            setnewTitle('')
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setnewTitle(event.currentTarget.value)
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
            setnewTitle('')
        }
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error?'error':''}
                value={newTitle}
                   onKeyDown={onKeyDownHandler}
                   onChange={onChangeHandler}/>
            {/*onChange={(event) => {*/}
            {/*           setnewTitle(event.currentTarget.value)*/}
            {/*       }}/>*/}


            <button onClick={addTaskHandler}>+</button>
            {error&& <div className={'error-message'}>{error}</div>}
        </div>
        <ul>


            {
                drushlagFoo().map((el) => {
                    // const removeTaskHandler=() => props.removeTask(el.id)
                    const onChangeChangeIsDone=(e:ChangeEvent<HTMLInputElement>)=>props.changeIsDone(el.id,e.currentTarget.checked)

                    return (
                        <li className={el.isDone?'is-Done':''} key={el.id}>

                            <input type="checkbox" checked={el.isDone} onChange={onChangeChangeIsDone}/>
                            <span>{el.title}</span>
                            <Button name={'x'} callBack={() => removeTaskHandler(el.id)}/>
                        </li>
                    )
                })}


        </ul>
        <Button clasName={fValueNEW==='All'?'activeFilter':''}  name={'All'} callBack={() => filterTasksHandler('All')}/>
        <Button clasName={fValueNEW==='Active'?'activeFilter':''} name={'Active'} callBack={() => filterTasksHandler('Active')}/>
        <Button clasName={fValueNEW==='Completed'?'activeFilter':''} name={'Completed'} callBack={() => filterTasksHandler('Completed')}/>
        {/*<button onClick={() => filterTasksHandler('All')}>All</button>*/}
        {/*<button onClick={() => filterTasksHandler('Active')}>Active</button>*/}
        {/*<button onClick={() => filterTasksHandler('Completed')}>Completed</button>*/}
    </div>
}