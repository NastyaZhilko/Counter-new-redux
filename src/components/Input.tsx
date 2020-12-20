
import React from 'react';
import s from './Input.module.css';
export type InputCompType = {
    value: number
    maxValue: number
    message: string

}
export const InputComp = (props: InputCompType) => {
    return (
        <div >
            {props.message ? <h3 className={props.message === 'Incorrect value' ? s.errorStyle : s.correctlyStyle}>{props.message}</h3>
                :<h3 className={(props.value === props.maxValue) ? s.errorStyle : s.correctlyStyle}>{props.value}</h3>
            }
        </div>
    )
}