import React from 'react'
import { useState } from 'react';
import { useTodo } from '../Context/TodoContext'
function Form() {

    const [todo , setTodo] = useState("");
    const {addTodo} = useTodo();
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!todo) return;
        
        addTodo({ todo ,completed: false})
        setTodo("") 
    }

  return (
    <form onSubmit={handleSubmit} className='w-full flex-grow'>
        <input type="text" className='w-[80%] text-xl h-full 
        indent-1 outline-none'value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit" className='w-[20%] h-full outline-none 
        hover:bg-blue-800 rounded-tr-xl rounded-br-xl
        border-none bg-blue-500'>Add</button>
    </form> 
  );
}   

export default Form