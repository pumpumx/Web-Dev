import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'
function Items() {
    const [complete , setComplete] = useState(false)
    const [isEditable , setIsEditable] = useState(false)
    const {deleteTodo , updateTodo , toggle} = useTodo;
  return (
    
    <div>Items</div>
  )
}

export default Items