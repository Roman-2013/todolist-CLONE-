import React from 'react';

type PropsType = {
    name: string
    callBack: () => void
    clasName?:string
}
export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button className={props.clasName} onClick={onClickHandler}>{props.name}</button>
    );
};



