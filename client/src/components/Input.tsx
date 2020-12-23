import React from 'react'
import '../App.css'

interface Props{
    placeHolder:string;
    name:string;
    value:string;
    setVal:(e:string)=>void
}

const NumberInput=(props:Props)=>{
    const {name,placeHolder,value,setVal}=props
    return <input type="text" name={name} placeholder={placeHolder} value={value} onChange={e=>{setVal(e.target.value)}}/>
}

export default NumberInput;