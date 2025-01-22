import { useState } from 'react'
import './App.css'
function App() {
  const [color , setColor] = useState("olive")
  return (
    <> 
           <div className="h-screen w-full duration-200" style={{backgroundColor:color}}>
          <div className=" rounded-2xl justify-around gap-3 fixed bottom-12 flex flex-wrap h-12  inset-2 p-2 m">
                <button className='bg-white rounded-xl outline-none shadow-lg w-24' onClick={()=> setColor("Red")}>Red</button>
                <button className='bg-white rounded-xl outline-none shadow-lg w-24' onClick={()=> setColor("Green")}>Green</button>
                <button className='bg-white rounded-xl outline-none shadow-lg w-24' onClick={()=> setColor("Blue")}>Blue</button>
                <button className='bg-white rounded-xl outline-none shadow-lg w-24' onClick={()=> setColor("#E6e6Ff")}>Lavender</button>
                <button className='bg-white rounded-xl outline-none shadow-lg w-24' onClick={()=> setColor("Pink")}>Pink</button>
                <button className='bg-white rounded-xl outline-none shadow-lg w-24' onClick={()=> setColor("Yellow")}>Yellow</button>
                <button className='bg-white rounded-xl outline-none shadow-lg w-24' onClick={()=> setColor("Brown")}>Brown</button>
                <button className='bg-white rounded-xl outline-none shadow-lg w-24' onClick={()=> setColor("Black")}>Black</button>
          </div>
        </div>
    </>
  )
}

export default App
