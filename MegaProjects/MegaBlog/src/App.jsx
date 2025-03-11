import { useState , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {Header , Footer} from './components/index'
import {Outlet} from 'react-router-dom'
function App() {
  const [loading , setLoadng] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
        if(userData){
          dispatch(login(user))

        }else{
          dispatch(logout())
        }
      })
      .finally(()=>setLoadng(false))
    },[])

    return !loading?(
      <div className='min-h-screen flex flex-wrap items-center content-between
      bg-gray-400'>
      <div className='w-full block '>
        <Header/>
          <main>
            Todo: <Outlet/>
          </main>
        <Footer/>
     </div>
    </div>
  ) : null
}

export default App
