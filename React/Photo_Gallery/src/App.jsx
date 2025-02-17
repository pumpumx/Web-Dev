import { useState } from 'react'


function App() {
  const [picCount, setPicCount] = useState(0)

  return (
   <>
   <div className='w-full m-0 p-0 h-screen bg-gradient-to-b from-green-500 to-green-200 flex justify-center items-center'>
    <div className='w-[80%] h-[60%] bg-gray-300 flex justify-center
    items-center flex-col'>
      <div className='w-full h-[30%] flex justify-center flex-col items-center'>
        <p className='text-3xl'>Photo Gallery App</p>
      <label htmlFor="number" className='w-full flex justify-center items-center '><input type="number" name="number" className='
      w-[4%]  indent-2 border-black  appearance-none'  onChange={(e)=>{
        setPicCount(e.target.value)
      }}/></label>
      <br></br>
      <button type="button" className='bg-blue-600 hover:bg-blue-500 transition-all w-[15%] h-[20%] text-white'>Get Photos</button>
      </div>

      <div className=' w-[95%] h-[80%] bg-white'>

      </div>
    </div>
   </div>
   </>
  )
}

export default App
