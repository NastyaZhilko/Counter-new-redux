import React, {useState} from 'react';
import s from './App.module.css';
import {ButtonComp} from "./components/Button";
import {InputComp} from "./components/Input";
import {InputSettings} from "./components/InputSetting";
import {restoreState, saveValue} from "./localStorage/LocalStarage";

const errorMes: string = 'Incorrect value'
const setMess: string = "enter values and press 'set'"

function App() {

    const [counter, setCounter] = useState<number>(restoreState().start)//значение счетчика(инит. значение = startValue сохраненноев localStorage)
    const [startValue, setStartValue] = useState<number>(restoreState().start)//стартовое значение в блоке настроек
    const [maxValue, setMaxValue] = useState<number>(restoreState().max)//максимальное значение в блоке настроек
    const [disabledSet, setDisableSet] = useState<boolean>(true)//булево значение определяет активность кнопки Set
    const [disabledInc, setDisableInc] = useState<boolean>(false)//булево значение определяет активность кнопки Inc
    const [disabledReset, setDisableReset] = useState<boolean>(true)//булево значение определяет активность кнопки Reset
    const [message, setMessage] = useState<string>('')//
//функция, возвращающая текстовое сообщение в input в зависимисти от корректности введенного значения
    const forMessage = (startValue: number, maxValue: number) => {
        if (maxValue <= startValue || startValue < 0) {
            setMessage(errorMes)
            setDisableSet(true)
        } else {
            setMessage(setMess)
            setDisableSet(false)
        }
    }
//меняем стартовое значение
    const changeStartValue = (startValue: number) => {
        forMessage(startValue, maxValue)
        setStartValue(startValue)
        setDisableReset(true)
        setDisableInc(true)
    }
    //меняем максимальное значение
    const changeMaxValue = (maxValue: number) => {
        forMessage(startValue, maxValue)
        setMaxValue(maxValue)
        setDisableReset(true)
        setDisableInc(true)
    }
    //увеличиваем значение на 1 при нажание ни кнопку "inc"
    const incButton = () => {
        if (counter < maxValue) {
            setCounter(Number(counter) + 1)
            setDisableReset(false)
        } else if (counter === maxValue) {
            setDisableInc(true)
        }
    }
//возвращаем стартовое значение при нажатии на кнопку "reset"
    const resetButton = () => {
        setCounter(startValue)
        setDisableReset(true)
        setDisableInc(false)
    }
//отправляем новое стартовое значение в коунтер
    const setButton = () => {
        setMessage('')
        setCounter(startValue)
        saveValue(maxValue, startValue)
        setDisableSet(true)
        setDisableReset(true)
        setDisableInc(false)
    }
    return (
        <div className={s.App}>
            <div>
                <h1>Settings</h1>
                <div className={s.body}>
                    <InputSettings
                        value={maxValue}
                        title={'max value:'}
                        changeValue={changeMaxValue}
                        message={maxValue <= startValue}
                    />
                    <InputSettings
                        value={startValue}
                        title={'start value:'}
                        changeValue={changeStartValue}
                        message={startValue >= maxValue}
                    />
                    <div className={s.Button}>
                        <ButtonComp
                            clickOnButton={setButton}
                            title={'set'}
                            disabledButton={disabledSet}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1>Counter</h1>
                <div className={s.body}>
                    <InputComp
                        value={counter}
                        maxValue={maxValue}
                        message={message}
                    />
                    <div className={s.Button}>
                        <ButtonComp
                            clickOnButton={incButton}
                            title={'inc'}
                            disabledButton={disabledInc}
                        />
                        <ButtonComp
                            clickOnButton={resetButton}
                            title={'reset'}
                            disabledButton={disabledReset}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;