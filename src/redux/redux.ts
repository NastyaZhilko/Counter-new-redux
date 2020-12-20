
export type CountType={

}

export type ActionType=
    ReturnType<typeof forMessage>|
    ReturnType<typeof changeStartValue>|
    ReturnType<typeof changeMaxValue>|
    ReturnType<typeof incButton>|
    ReturnType<typeof resetButton>|
    ReturnType<typeof setButton>

export const countReducer=(state:CountType, action: ActionType )=>{
    switch(action.type){
        case FORMESSAGE:
            return{}
        case CHANGE_START_VALUE:
            return{}
        case CHANGE_MAX_VALUE:
            return{}
        case INC_BUTTON:
            return{}
        case RESET_BUTTON:
            return{}
        case SET_BUTTON:
            return{}
        default:
            return
    }
}

export const forMessage = (startValue: number, maxValue: number) => {
    return {type: FORMESSAGE, startValue, maxValue } as const
}
export const changeStartValue = (startValue: number) => {
    return {type: CHANGE_START_VALUE, startValue} as const
}
export const changeMaxValue = (maxValue: number) => {
    return {type: CHANGE_MAX_VALUE, maxValue} as const
}
export const incButton = () => {
    return {type: INC_BUTTON} as const
}
export const resetButton = () => {
    return {type: RESET_BUTTON} as const
}
export const setButton = () => {
    return {type: SET_BUTTON} as const
}

