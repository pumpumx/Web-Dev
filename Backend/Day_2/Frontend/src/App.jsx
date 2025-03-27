import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes , setJokes] = useState([])
  const handler = async ()=>{
    try {
    const joke = await axios.get("/jokes")
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log("Error :: ",error) 
    })
    } catch (error) {
      console.log("error :: ", error)
    }
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Joke aur chai</h1>
      <button type='button' 
      onClick={handler} 
      style={{
        backgroundColor: "blue" , 
        width: "100px",
        height: "40px",
      }}
      >Click
      </button>
      {jokes.map((joke , index)=>(
          <div key={joke.id} >
            <h1>{joke.title}</h1>
            <p>{joke.content}</p>
          </div>
))}
    </>
  )
}

export default App
