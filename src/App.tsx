import React from 'react';
import s from './App.module.css';
import {ButtonComp} from "./components/Button";
import {InputComp} from "./components/Input";
import {InputSettings} from "./components/InputSetting";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {
    changeMaxValueAC,
    changeStartValueAC,
    CountReducerType,
    incButtonAC,
    resetButtonAC,
    setButtonAC
} from "./redux/redux-counter";

function App() {
    const dispatch = useDispatch();
    const counter = useSelector<AppStateType, CountReducerType>(state => state.counter)

//меняем стартовое значение
    const changeStartValue = (startValue: number) => {
        dispatch(changeStartValueAC(startValue))
    }
//меняем максимальное значение
    const changeMaxValue = (maxValue: number) => {
        dispatch(changeMaxValueAC(maxValue))
    }
//увеличиваем значение на 1 при нажание ни кнопку "inc"
    const incButton = () => {
        dispatch(incButtonAC())
    }
//возвращаем стартовое значение при нажатии на кнопку "reset"
    const resetButton = () => {
        dispatch(resetButtonAC())
    }
//отправляем новое стартовое значение в коунтер
    const setButton = () => {
        dispatch(setButtonAC())
    }
    return (
        <div className={s.App}>
            <div>
                <h1>Settings</h1>
                <div className={s.body}>
                    <InputSettings
                        value={counter.maxValue}
                        title={'max value:'}
                        changeValue={changeMaxValue}
                        message={counter.maxValue <= counter.startValue}
                    />
                    <InputSettings
                        value={counter.startValue}
                        title={'start value:'}
                        changeValue={changeStartValue}
                        message={counter.startValue >= counter.maxValue}
                    />
                    <div className={s.Button}>
                        <ButtonComp
                            clickOnButton={setButton}
                            title={'set'}
                            disabledButton={counter.disabledSet}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1>Counter</h1>
                <div className={s.body}>
                    <InputComp
                        value={counter.count}
                        maxValue={counter.maxValue}
                        message={counter.message}
                    />
                    <div className={s.Button}>
                        <ButtonComp
                            clickOnButton={incButton}
                            title={'inc'}
                            disabledButton={counter.disabledInc}
                        />
                        <ButtonComp
                            clickOnButton={resetButton}
                            title={'reset'}
                            disabledButton={counter.disabledReset}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;