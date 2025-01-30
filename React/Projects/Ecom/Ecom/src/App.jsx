import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-gray-400 flex justify-center items-center'>
        <div className='w-[50%] bg-white h-[55%] rounded-xl grid grid-cols-2 grid-flow-row'>
          <div className='SignUp w-auto h-auto bg-pink-500 flex flex-col justify-center items-center gap-4'>
              <h1 className='font-bold text-5xl text-black '>Sign In</h1><br></br>
              <label for="nameInput"><input type="text" name="nameInput" placeholder='Enter Your Username'
               className='w-[200px] h-[50px] outline-none border-none' />
              </label><br></br>
              <label for="nameInput"><input type="password" name="nameInput" placeholder='Enter your password'/></label><br></br>
              <button type="submit" className='w-40 bg-pink-200 h-12'>Sign In</button>
          </div>
          <div className='SignUp w-auto h-auto bg-red-800'>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
