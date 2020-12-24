import {
    changeMaxValueAC,
    changeStartValueAC,
    countReducer,
    CountReducerType,
    incButtonAC,
    resetButtonAC, setButtonAC
} from "./redux-counter";
import {restoreState} from "../localStorage/LocalStarage";

let initialState: CountReducerType

beforeEach(() => {

    initialState =  {
        count: 0,
        startValue: 0,
        maxValue: 5,
        disabledInc: false,
        disabledReset: true,
        disabledSet: true,
        message: ''
    }
})

test('correct inc count', () => {

    const action = incButtonAC();

    const endState = countReducer(initialState, action)
    expect(endState.count).toBe(restoreState().start+1);


});


test('correct reset count', () => {

    const action = resetButtonAC();

    const endState = countReducer(initialState, action)

    expect(endState.count).toBe(0);
    expect(endState.disabledReset).toBe(true);
    expect(endState.maxValue).toBe(5);

})

test('correct changeStartValue count', () => {

    const action = changeStartValueAC(2);

    const endState = countReducer(initialState, action)

    expect(endState.startValue).toBe(2);
    expect(endState.message).toBe("enter values and press 'set'");
    expect(endState.maxValue).toBe(5);
    expect(endState.disabledReset).toBe(true);
    expect(endState.disabledSet).toBe(false);
});

test('correct changeMaxValue counter', () => {

    const action = changeMaxValueAC(-3);

    const endState = countReducer(initialState, action)

    expect(endState.message).toBe('Incorrect value');
    expect(endState.disabledReset).toBe(true);
    expect(endState.disabledSet).toBe(true);
    expect(endState.disabledInc).toBe(true);
    expect(endState.startValue).toBe(0);


});

test('correct setButton count', () => {

    const action = setButtonAC();

    const endState = countReducer(initialState, action)
    expect(endState.count).toBe(restoreState().start);
    expect(endState.startValue).toBe(restoreState().start);
    expect(endState.disabledReset).toBe(true);
    expect(endState.disabledSet).toBe(true);
    expect(endState.disabledInc).toBe(false);
    expect(endState.message).toBe('');


});



