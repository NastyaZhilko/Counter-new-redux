const FOR_MESSAGE = 'FOR_MESSAGE'
const CHANGE_START_VALUE = 'CHANGE_START_VALUE'
const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'
const INC_BUTTON = 'INC_BUTTON'
const RESET_BUTTON = 'RESET_BUTTON'
const SET_BUTTON = 'SET_BUTTON'



export type ActionType=
    ReturnType<typeof forMessage>|
    ReturnType<typeof changeStartValue>|
    ReturnType<typeof changeMaxValue>|
    ReturnType<typeof incButton>|
    ReturnType<typeof resetButton>|
    ReturnType<typeof setButton>

let initialState={
    counter:0,
    startValue:0,
    maxValue:5,
    disabledSet:true,
    disabledInc:false,
    disabledReset:true,
    message:''
}
export const countReducer=(state=initialState, action: ActionType )=>{
    switch(action.type){
        case 'FOR_MESSAGE':
            return{

            }
        case 'CHANGE_START_VALUE':
            return{

            }
        case 'CHANGE_MAX_VALUE':
            return{

            }
        case 'INC_BUTTON':
            return{
                ...state,
                count: action.count+1
            }
        case 'RESET_BUTTON':
            return{

            }
        case 'SET_BUTTON':
            return{

            }
        default:
            return
    }
}

export const forMessage = (startValue: number, maxValue: number) => {
    return {type: FOR_MESSAGE, startValue, maxValue } as const
}
export const changeStartValue = (startValue: number) => {
    return {type: CHANGE_START_VALUE, startValue} as const
}
export const changeMaxValue = (maxValue: number) => {
    return {type: CHANGE_MAX_VALUE, maxValue} as const
}
export const incButton = (count:number) => {
    return {type: INC_BUTTON,count} as const
}
export const resetButton = () => {
    return {type: RESET_BUTTON} as const
}
export const setButton = () => {
    return {type: SET_BUTTON} as const
}

