import { useState } from 'react'

function App() {
  const [picData , setPicData] = useState({})
  const useSplashApi = async (picCount) => {
    try{
    const apiKey = "izZo39jz4We2o8WWYx4XLCKsHxHXP6wRNB0ZTinpyvw";
    let response = await fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
    response = await response.json;
    return response;
    }
    catch(error){
        console.log(error)

    }
    
}
  const [picCount, setPicCount] = useState(0)
  const [data , setData] = useState([])
  const main = async ()=>{
    setData(await useSplashApi(picCount))
    set
    if(data==-1){
      alert(console.log("Error getting photos"))
    }
  }
  return (
   <>
   <div className='w-full m-0 p-0 h-screen bg-gradient-to-b from-green-500 to-green-200 flex justify-center items-center'>
    <div className='w-[80%] h-[90%] bg-gray-300 flex justify-center
    items-center flex-col'>
      <div className='w-full h-[20%] flex justify-center flex-col items-center'>
        <p className='text-3xl'>Photo Gallery App</p>
      <label htmlFor="number" className='w-full flex justify-center items-center '><input type="number" name="number" className='
      w-[2rem]  indent-2 border-black  appearance-none'  onChange={(e)=>{
        setPicCount(e.target.value)
      }}/></label>
      <br></br>
      <button type="button" className='overflow-hidden bg-blue-600 hover:bg-blue-500 transition-all w-[15%] h-[20%] text-white' onClick={main}>Get Photos</button>
      </div>

      <div className='w-[95%] h-[70%] bg-white flex flex-1 items-baseline pt-10'>
        
      </div>
    </div>
   </div>
   </>
  )
}

export default App
