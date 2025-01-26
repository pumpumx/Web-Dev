import { useCallback, useEffect, useState } from 'react'
import './App.css'

  function App() {
    const [length, setLength] = useState(8)
    const [number , setNumber] = useState(false)
    const [special , setSpecial] = useState(false)
    const [password , setPassword] = useState("")
    const passRandom = useCallback((  )=>{
        var pass = ""
        var str = "ABCDEFGHIJKLMANOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
        if(number) str+="0123456789"
        if(special) str+="`~!@#$%^&*()_"
        for(var i=0;i<length;i++){
            const num1 = Math.floor(Math.random() * str.length)
            pass += str[num1]
        }
        setPassword(pass)
    } , [length , number , special])
    const handler = (event)=>{
      setLength(Number(event.target.value));
    }
    useEffect(()=>{
      passRandom()

    }, [length , number , special])

    const copyClip = ()=>{
      navigator.clipboard.writeText(password)
    }

    return (
      <>
      <div className='w-full flex justify-center h-screen bg-red-400'>
        <div className="w-4/12 h-24 rounded-md bg-black flex-col flex justify-center items-center">
            <div className='w-4/5 flex justify-around'>
              <textarea className='w-full h-12 bg-white text-2xl text-yellow-500 text-md  resize-none rounded-xl' value={password}  readOnly>
              </textarea>
              <button className='bg-blue-400 rounded-xl h-12 w-32 hover:bg-yellow-800 transition-all' onClick={copyClip} >
              Copy
            </button>
          </div>
          <div className='flex gap-6'>  
            <input type="range" min="8" max="20" value ={length} className='appearence-none resize-none rounded-xl text-white
            ' onChange={handler}    /><label className='text-white'>Length: {length}</label>
            <span><input type="checkbox" onChange={(e) =>setNumber(e.target.checked)} /><p className='text-white inline' >Number </p></span>
            <span><input type="checkbox" onChange={(e) => setSpecial(e.target.checked)} /><p className='text-white inline' >Characters</p></span>
            </div>
      </div>
    </div>
    </>
  )
}

export default App
