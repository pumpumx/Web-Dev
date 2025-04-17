import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

function App() {
    const formSchema = yup.object().shape({
      username : yup.string().required("Username is required"),
      email : yup.string().email("Invalid Email").required("Email is required"),
      password : yup.string().min(6 , "Min value is 6").required("Pass field is required")
    })

  const {register , handleSubmit , formState: {errors , isValid}} = useForm({
    resolver : yupResolver(formSchema),
    mode:"onChange"
  })

  const onSubmit  = (data) => {
    console.log("data" , data)
  }
      return (
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg flex items-center flex-col justify-around mx-auto '>
          <h1 className='text-2xl font-bold mb-2'>Form Validation</h1>
          <div>
            <label htmlFor="username" className='block mb-1 text-lg font-bold'>Username</label>
            <input type="text" {...register('username')} className='w-full px-3 py4 rounded-md'/>
            {errors.username && <p className='text-red-500 font-s'>{errors.username.message}</p>}
          </div>
          <div>
          <label htmlFor="username" className='block mb-1 text-lg font-bold'>Email</label>

            <input type="text" {...register('email')}/>

            {errors.email && <p className='text-red-500 font-s'>{errors.email.message}</p>}
          </div>
          <div>
          <label htmlFor="username" className='block mb-1 text-lg font-bold'>Password</label>
          <input type="text" {...register('password')} className='w-full px-4 py-2 rounded-md'/>

            {errors.password && <p className='text-red-500 text-md '>{errors.password.message}</p>}
          </div>

          <button type='submit' disabled={!isValid} className='bg-blue-300 hover:bg-blue-600 text-white'>
            Submit
          </button>
        </form>
  )
}

export default App