export const saveValue=(maxValue:number, startValue:number|string)=>{
    let obj={
        'max':maxValue,
        'start':startValue
    }
    localStorage.setItem('counter', JSON.stringify(obj))
}
export const restoreState=()=>{
    let obj=localStorage.getItem('counter')
    return obj ? JSON.parse(obj):{'max':null, 'start':null}
}