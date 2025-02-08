import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen p-0 m-0 bg-[url()]'>
        <div className='w-full h-[8%] flex text-white flex-row bg-violet-950 justify-around items-center'>
          <span >Logo</span>
          <span>
            <ul className='inline-flex gap-8'>
              <li>Grade</li>
              <li>Assignments</li>
              <li>Time Table</li>
              <li>Attendance</li>
              <li>Support</li>
            </ul>
          </span>
          <span className='flex gap-8 '>
            <p>Sign Up or Log in</p>
            <p>Search</p>
          </span>
        </div>
        <div className='w-full h-[90vh] flex flex-col gap-9 justify-center items-center'>
          <span className='text-5xl font-mono text-black font-bold'><p>Learn , Assess , Grade and Perform</p></span>
            <div className='w-full h-1/2 flex justify-center  items-center '>
              <div className='w-[15%] h-[60%] bg-red-300 '></div>
              <div className='w-[20%] h-[70%] bg-red-600 '></div>
              <div className='w-[15%] h-[60%] bg-red-300 '></div> 
            </div>
            <div className='w-full flex justify-center items-center'>
              <label htmlFor="input_id" className='w-1/2 h-[7rem] bg-white'><input placeholder='University ID' type="search" name="input_id"  className='w-[100%] h-[5rem] 
              outline-none boreder-none bg-white border-red-500 text-lg indent-5 text-black'/></label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
