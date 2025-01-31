import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import wed from './assets/wed.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-slate-400 '>
        <div className='bg-black flex w-full h-[60px] justify-between items-center'>
          <span><p className='font-extrabold text-white  inline ml-8'>envato</p><p className='text-white inline'>Market</p></span>
          <span><button className='bg-green-700  w-[7rem] h-[2rem] text-center content-center rounded-md
       shadow-white mr- text-bold mr-8
      '>Buy Now</button></span>
        </div>
          <div className="w-full h-screen flex flex-col bg-[url('assets/wed.jpg')] bg-no-repeat bg-cover" >
          <div className='flex bg-transparent justify-around items-center w-full h-[4rem] '>
            <span><p className='text-3xl text-white'>Belle</p></span>
            <span>
              <ul className='gap-10 inline'>
                <li className='inline m-7 w-auto text-white '>Home</li>
                <li className='inline m-7 w-auto text-white '>Story</li>
                <li className='inline m-7 w-auto text-white'>Gallery</li>
                <li className='inline m-7 w-auto text-white'>Contact</li>
              </ul>
              <select value="Pages inline" className='outline-none bg-transparent text-white'>
                <option value="Pages">Pages</option>
              </select>
            </span>
          </div>
          <div className='mx-auto my-auto'>
            <p className='text-white text-8xl font-mono'>SAVE THE DATE</p><br></br>
            <p className='text-white text-xl text-center'>NewYork | Joseph and Anna | November 28th</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
