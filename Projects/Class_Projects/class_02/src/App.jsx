import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen b-white flex justify-center items-center'>
        <div className='w-1/3 h-[90%] bg-gradient-to-br from-blue-900 to-orange-600 
        rounded-2xl shadow-xl drop-shadow-lg flex flex-col justify-center items-center gap-4' >
              <div className='flex flex-col w-[80%] flex-grow h-[30%] justify-center items-center text-center gap-10'>
                  <p className='text-white text-5xl font-serif pb-4'>Instagram</p>
                  <div>
                    <label htmlFor="email"><input type="email" placeholder="Enter username or email" name="email" className='w-[20rem] h-[2.5rem] 
                    outline-none border- indent-2 mb-4 rounded-tl-lg rounded-br-lg' /></label><br></br>
                    <label htmlFor="pass"><input type="password" placeholder="Enter your Password" name="pass" className='w-[20rem] h-[2.5rem] 
                    outline-none indent-2 border-none mb-4  rounded-tl-lg rounded-br-lg' /></label>
                    <p className='flex-end text-white mb-4 text-sm ml-[55%] w-1/2'>Forgotten Password?</p>
                    <button type="submit" className='w-[20rem] h-[2.5rem] bg-blue-600 text-white rounded-tl-lg rounded-br-lg hover:bg-blue-800 '>Log in</button><br></br><br></br>
                   <span className='flex w-[100%] justify-center items-center gap-5 mt-2'><hr className='w-[40%]'></hr><p className='inline text-white font-bold'>Or</p><hr className='w-[40%]'></hr></span>
                    <p className='text-sm text-white font-mono mt-5 font-bold'>Log in with facebook</p>
                  </div>
              </div>
              <div className='flex-end w-[100%] flex justify-center items-center'>
              <span className='w-[100%] flex flex-col justify-center items-center'>  <hr className='w-[100%] mb-6 '></hr>
                <p  className='text-white text-sm mb-10'>Dont have a Account? Sign up!</p>
                </span>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
