import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import  {useForm}  from 'react-hook-form'
function Practice() {
    const formSchema = yup.object().shape({
        bookTitle : yup.string().required("bookTitle is required"),
        authorName : yup.string().required("authorName is required"),
        genre: yup.string().required("Please select the book genre"),
        rating: yup.number().required("Rating is mandatory , arent you a reader?"),
        review : yup.string().required("Comeon you can atleast describe a bit about it , you surely aint a reader"),
        referal : yup.bool()
    })

    const {register , handleSubmit , formState : {errors , isValid} } = useForm({
        resolver : yupResolver(formSchema)
    })

    const onSubmit = (data)=>{
        console.log("data" , data)
    }
  return (
    <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[40%] mx-auto py-2 px-3 flex flex-col justify-around items-center bg-amber-100'>
                    <h1 className='font-bold text-teal-600 text-2xl'>Book Feedback Form</h1>
                <div className='w-[40%] mb-3'>
                    <label className='block text-center text-xl px-2 font-medium py-4 text-teal-900'>Book Title</label>
                    <input type="text" {...register("bookTitle")}
                    className={` w-full outline-none hover:focus:ring-blue-300 border-2 border-teal-500 h-[2rem]`}
                    />
                    {errors.bookTitle && <p className='text-red-500 text-sm'>{errors.bookTitle.message}</p>}  
                </div>
                <div className='w-[40%] mb-3'>
                    <label className='block text-center text-xl px-2 font-medium py-4 text-teal-900'>Author Name</label>
                    <input type="text" {...register("authorName")}
                    className={` w-full outline-none hover:focus:ring-blue-300 border-2 border-teal-500 h-[2rem]`}
                    />
                    {errors.authorName && <p className='text-red-500 text-sm'>{errors.authorName.message}</p>}  
                </div>
                <div className='text-teal-900 block'>
                    <select {...register("genre")} className='bg-amber-100 text-teal-800 outline-none h-[2rem]'>
                        <option value="" disabled hidden>Select your genre</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Biography">Biography</option>
                    </select>
                </div>
                
            </form>
    </>
  )
}

export default Practice