import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='w-full h-screen bg-red-400'>
      <div className="w-4/5 h-20 bg-green-800 mx-auto mt-10"></div>
    </div>
    </>
  )
}

export default App
