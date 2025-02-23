import React from 'react'
import { useState } from 'react';
import { useTodo } from '../Context/TodoContext'
function Form() {

    const [data , setData] = useState("");
    const {addTodo} = useTodo;
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!data) return 
        addTodo({data ,completed:false})
        setData("")
    }

  return (
    <form action={handleSubmit} className='w-full flex-grow'>
        <input type="text" className='w-[80%] text-xl h-full 
        indent-1 outline-none' onChange={(e)=>setData(e.target.value)}/>
        <button type="submit" className='w-[20%] h-full outline-none 
        hover:bg-blue-800 rounded-tr-xl rounded-br-xl
        border-none bg-blue-500'>Add</button>
    </form> 
  )
}   

export default Form