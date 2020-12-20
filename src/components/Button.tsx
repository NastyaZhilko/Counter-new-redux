import React from 'react';
import s from './Button.module.css';
export type ButtonCompType = {
    clickOnButton: () => void
    title: string
    disabledButton: boolean
}
export const ButtonComp = (props:ButtonCompType) => {
    return (

        <div className={s.button}>
            <button onClick={props.clickOnButton} disabled={props.disabledButton}>{props.title}</button>
        </div>
    )
}