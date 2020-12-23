import React, {ChangeEvent} from 'react';
import s from './InputSetting.module.css';


export type InputSettingsType = {
    title: string
    value: number | string
    changeValue: (value: number) => void
    message?: boolean
}

export const InputSettings = (props: InputSettingsType) => {
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(Number(e.currentTarget.value))
    }
    return (
        <div className={s.input}>
            <span>{props.title}</span>
            <input className={(props.value < 0 || props.message) ? s.errorStyle : s.correctlyStyle}
                   onChange={changeValue}
                   value={props.value}
                   type={'number'}/>
        </div>
    )
}