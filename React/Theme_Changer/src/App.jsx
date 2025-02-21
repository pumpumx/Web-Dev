import { useState } from 'react'

function App() {
  const [isDark, setisDark] = useState(false)
    const ToggleTheme = ()=>{
        setisDark(!isDark)
    }
  return (
    <>
    <div className={`w-full h-screen flex justify-center items-center ${isDark?"bg-white":"bg-black"} transition-all`} >
      <div className={`w-[120px] h-[50px] rounded-full border-red-200 ${isDark?"bg-black":"bg-white"} transition  ease-in-out flex justify-center items-center p-1`}>
        <button className={`w-1/3 h-[40px] ${isDark?"bg-white mr-auto":"bg-black ml-auto"} rounded-full transition ease-in-out`} onClick={
          ToggleTheme
        }></button>
      </div>
    </div>
    </>
  )
}

export default App
