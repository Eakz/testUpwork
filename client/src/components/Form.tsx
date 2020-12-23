import React,{useState} from 'react'
import Axios from 'axios'
import '../App.css'
// Components
import Input from './Input'

const Form =  ()=>{
    const [num1,setNum1]=useState('')
    const [num2,setNum2]=useState('')
    const [answer,setAnswer]=useState('')
    const fetch = async ()=>{
        const response = await Axios.post('http://localhost:5000/sum',{
            num1,
            num2
            
        },{headers: {         
            "Content-Type":"application/json"
          }})
        setAnswer(response.data.sum)
    }
    
    return <div className="form">

            <form onSubmit={e=>{

                e.preventDefault();
                fetch()
                }}>
                    <p>Enter the numbers</p>
            <Input placeHolder="number 1" name="nom1" value={num1} setVal={setNum1}/>
            <Input placeHolder="number 2" name="nom2" value={num2} setVal={setNum2}/>
    <button type="submit">Sum</button>
    <hr />
    <p>Results</p>
    <div className="answer">{answer}</div>
            </form>

    </div>
}

export default Form;