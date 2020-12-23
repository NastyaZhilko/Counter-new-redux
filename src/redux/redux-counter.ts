import {restoreState, saveValue} from "../localStorage/LocalStarage";


const INC_BUTTON = 'INC_BUTTON'
const RESET_BUTTON = 'RESET_BUTTON'
const CHANGE_START_VALUE = 'CHANGE_START_VALUE'
const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'
const SET_BUTTON = 'SET_BUTTON'

export type CountReducerType = {
    count: number
    startValue: number
    maxValue: number
    disabledInc: boolean
    disabledReset: boolean
    disabledSet: boolean
    message: string
}

export type ActionType =

    ReturnType<typeof incButtonAC> |
    ReturnType<typeof resetButtonAC> |
    ReturnType<typeof changeStartValueAC> |
    ReturnType<typeof changeMaxValueAC> |
    ReturnType<typeof setButtonAC>

export let initialState: CountReducerType = {
    count: restoreState().start,
    startValue: restoreState().start,
    maxValue: restoreState().max,
    disabledInc: false,
    disabledReset: true,
    disabledSet: true,
    message: ''
}

export const countReducer = (state: CountReducerType = initialState, action: ActionType): CountReducerType => {
    switch (action.type) {


        case 'INC_BUTTON': {
            const stateCopy = {...state}
            if (stateCopy.count < stateCopy.maxValue) {
                stateCopy.count = (stateCopy.count + 1)
                stateCopy.disabledInc = false
                stateCopy.disabledReset = true
            } else {
                stateCopy.disabledReset = false
                stateCopy.disabledInc = true
            }
            return stateCopy

        }
        case 'RESET_BUTTON': {
            const stateCopy = {...state}
            stateCopy.count = stateCopy.startValue
            stateCopy.disabledInc = false
            stateCopy.disabledReset = true
            return stateCopy
        }
        case 'CHANGE_START_VALUE': {
            const stateCopy = {...state}
            if((stateCopy.maxValue <= action.startValue) || (action.startValue < 0)){
                stateCopy.startValue = action.startValue
                stateCopy.disabledReset = true
                stateCopy.disabledInc = true
                stateCopy.disabledSet = true
                stateCopy.message = 'Incorrect value'
            }else{
                stateCopy.startValue = action.startValue
                stateCopy.disabledReset = true
                stateCopy.disabledInc = true
                stateCopy.disabledSet = false
                stateCopy.message = "enter values and press 'set'"
            }
            return stateCopy

        }
        case 'CHANGE_MAX_VALUE': {
            const stateCopy = {...state}

            if((action.maxValue <= stateCopy.startValue) || (stateCopy.startValue < 0)){
                stateCopy.maxValue = action.maxValue
                stateCopy.disabledReset = true
                stateCopy.disabledInc = true
                stateCopy.disabledSet = true
                stateCopy.message = 'Incorrect value'
            }else{
            stateCopy.maxValue = action.maxValue
            stateCopy.disabledReset = true
            stateCopy.disabledInc = true
            stateCopy.disabledSet = false
            stateCopy.message = "enter values and press 'set'"}
            return stateCopy
        }
        case 'SET_BUTTON': {
            const stateCopy = {...state}
            stateCopy.count = stateCopy.startValue
            stateCopy.disabledSet = true
            stateCopy.disabledReset = true
            stateCopy.disabledInc = false
            stateCopy.message = ''
            saveValue(stateCopy.maxValue, stateCopy.startValue)
            return stateCopy
        }
        default:
            return state
    }
}


export const incButtonAC = () => {
    return {type: INC_BUTTON} as const
}
export const resetButtonAC = () => {
    return {type: RESET_BUTTON} as const
}
export const changeStartValueAC = (startValue: number) => {
    return {type: CHANGE_START_VALUE, startValue} as const
}
export const changeMaxValueAC = (maxValue: number) => {
    return {type: CHANGE_MAX_VALUE, maxValue} as const
}
export const setButtonAC = () => {
    return {type: SET_BUTTON} as const
}

