import React from 'react'
import { useState } from 'react'

function inputBox(
    {
        label,
        amount,
        setAmount,
        Converted,
        setConverted,
    }
) {
    

    return (
        <>
            <div className='w-[150px] h-[20px] outline-none border-none text-black m-2 p-2'>
                <label htmlFor="">{label}
                    <input type="text" className='w-full h-full' placeholder='Enter your currency value
                    '/>
                </label>
            </div>
        </>
    )
}

export default inputBox