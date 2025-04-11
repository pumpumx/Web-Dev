import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function App() {
  const  inputData = []
  const [value , setValue] = useState("")
  
   var key =1;
  const addTodo = ()=>{
    key++
  }
  useEffect(()=>{
    inputData.push(value)
  } , [addTodo])
 
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[60%] h-[30%] flex flex-col bg-green-500'> 
        <span><p className='text-lg '>Dynamic content manager</p></span>
        <span className='w-[90%] flex justify-around h-[20%] bg-gray-300'>      
          <input type="text" 
          className='w-[60%] h-full bg-white' 
          onChange={(e)=>setValue(e.target.value)} 
          />
        <button className='w-[25%] h-full bg-blue-500' onClick={addTodo}>AddTodo</button>
        </span>
        <div className='w-full h-[250vh] flex flex-col bg-gray-400'>
          {inputData.map((value)=>{
            <div key={key} className='w-[90%] h-[10%] flex bg-blue-400'>
              <span className='w-[40%]'><p className='text-lg font-bold text-black'>{value}</p></span>
              <button className='bg-red-300 w-[10%] h-[15%]'>Update</button> 
              <button className='bg-green-300 w-[10%] h-[15%]'>Delete</button>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App