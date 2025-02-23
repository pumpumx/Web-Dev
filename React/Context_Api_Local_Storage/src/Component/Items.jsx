import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'
function Items() {
    const [complete , setComplete] = useState(false)
    const [isEditable , setIsEditable] = useState(false)
    const {deleteTodo , updateTodo , toggle} = useTodo;
  return (
    
    <div className={`w-full flex 
    
    ${(complete)?"bg-green-300 line-through":"bg-gray-600"} `}>
        <input type="checkbox" onClick={!toggle}></input>

    </div>
  )
}

export default Items