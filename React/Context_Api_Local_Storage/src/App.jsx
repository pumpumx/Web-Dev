import { useState , useEffect } from 'react'
import { TodoProvider} from './Context/TodoContext'
import Form from './Component/Form';
import Items from './Component/Items';

function App() {
  
    const [todos , setTodos] = useState([]);
    const addTodo = (todo)=>{
      setTodos((prev) =>[{id: Date.now(), ...todo }, ...prev])
    }

    const updateTodo = (id , todo)=>{
        setTodos((prev)=>prev.map( (prevTodo)=>(prevTodo.id===id)?todo:prev))
    }
    const deleteTodo = (id)=>{
      setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
    }
    const toggle = (id)=>{
      setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id)?{...prevTodo , completed: !prevTodo.completed} : prevTodo))
    }
    
    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))
  
      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

  return (
   <TodoProvider value={{addTodo , updateTodo , deleteTodo , toggle}}>
      <div className='w-full h-screen bg-green-400 flex flex-col justify-center items-center '>
        <div className="w-[80%] h-[10%] rounded-xl flex justify-between">
          <Form />
        </div>
        <div className='flex flex-col flex-wrap w-[80%] '>
           {todos.map((todo)=>(
                                      <div key={todo.id}
                                      className='w-full h-[70px]'
                                      >
                                        <Items todo={todo} />
                                      </div>
            
           ))}
        </div>
      </div>
   </TodoProvider>
  )
}

export default App
