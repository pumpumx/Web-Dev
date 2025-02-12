import { useState } from 'react'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
