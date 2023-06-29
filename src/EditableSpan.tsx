import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    value: string
    onChange:(newTitle:string)=>void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    let [editMode, seteditMode] = useState(false)
    const [title,settitle]=useState(props.value)

    const activateEditMode = () => {
        seteditMode(!editMode)
        if(editMode){
            props.onChange(title)

        }
    }


    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        settitle(e.currentTarget.value)
    }

    return editMode
        ? <input value={title} onChange={onChangeHandler}  onBlur={activateEditMode} autoFocus/>
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
};

