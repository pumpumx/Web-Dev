import { useEffect, useState } from 'react'

function App() {
 
  const useSplashApi = async (picCount) => {
    setErr("")
    try{
      if(picCount>0 && picCount<11){
    const apiKey = "izZo39jz4We2o8WWYx4XLCKsHxHXP6wRNB0ZTinpyvw";
    let response = await fetch(`https://api.unsplash.com/photos/?per_page=${picCount}&client_id=${apiKey}`);
    let data =  await response.json();
    return data;
      }
      else{
        setErr("Please enter number greater than 0 and less than 11")
        return -1;
      }
    }
    catch(error){
        console.log("Error fetching Photos" , error)
        return -1;  
    }
}
  const [picCount, setPicCount] = useState(1)
  const [data , setData] = useState([])
  const [err , setErr] = useState("")
  const main = async ()=>{
    let result = await useSplashApi(picCount)
    if(result===-1){
      alert("Error getting photos")
    }
    else{
      setData(result)
    }
  }
  useEffect(()=>{
    console.log("Updated data: ", data)
  } , [data])
  return (
   <>
   <div className='w-full m-0 p-0 h-screen bg-gradient-to-b from-green-500 to-green-200 flex justify-center items-center'>
    <div className='w-[80%] h-[90%] bg-gray-300 flex justify-center
    items-center flex-col'>
      <div className='w-full h-[20%] flex justify-center flex-col items-center'>
        <p className='text-3xl'>Photo Gallery App</p>
      <label htmlFor="number" className='w-full flex justify-center items-center '><input type="number" name="number" className='
      w-[2rem]  border-black   [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center  '  onChange={(e)=>{
        setPicCount(e.target.value)
      }}/></label>
      {err && <p className='text-red-600'>{err}</p>}
      <br></br>
      <button type="button" className='overflow-hidden bg-blue-600 hover:bg-blue-500 transition-all w-[15%] h-[20%] text-white' onClick={main}>Get Photos</button>
      </div>

      <div className='w-[95%] h-[70%] bg-white flex flex-1 items-baseline pt-10 flex-wrap justify-center '>
          <ul className='flex w-full flex-grow flex-wrap gap-5 justify-center'>
            {data.map((photo)=>(
              <li key={photo.id} className='w-[200px] h-[200px]'>
                <img src={photo.urls.small} alt={photo.description} className='w-[200px] h-[200px] object-cover'/>
              </li>
            ))}
          </ul>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
