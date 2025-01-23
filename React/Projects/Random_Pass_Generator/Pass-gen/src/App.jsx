import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='w-full flex justify-center h-screen bg-red-400'>
      <div className="w-4/12 h-24 bg-black flex-col flex justify-center items-center">
          <div className='w-4/5 flex justify-around'>
            <textarea className='w-full h-2 bg-white text-2xl resize-none rounded-xl'>
            </textarea>
            <button className='bg-blue-400 rounded-xl h-12 w-32'>
              Copy
            </button>
          </div>
          <div className='flex gap-6'> 
            <input type="range" min="8" max="100" className='appearence-none resize-none rounded-xl' />
            <span><input type="checkbox" /><p className='text-white inline'>Number</p></span>
            <span><input type="checkbox" name="" id="" /><p className='text-white inline'>Characters</p></span>
            </div>
      </div>
    </div>
    </>
  )
}

export default App
