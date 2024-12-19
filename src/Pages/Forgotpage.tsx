import React from 'react'
import forgot from "../images/forgot.jpg"

function forgotpage() {
  return (
    <div>
                 <div> <div className='w-[300px] h-[260px] mx-auto'><img src={forgot} className='h-full w-full'/></div>
                     <h2 className='text-[rgb(33,56,88)] font-bold'>Forgot your password?</h2>
                     </div>
            <form className='w-[40%] mx-auto mt-6'>
                <div className='flex flex-col '>
                    <input type="email" className="outline-none" placeholder='Email'/>
                    <button className='text-white bg-[rgb(33,56,88)] p-1 rounded-md mt-3 w-[60px] mx-auto' >submit</button>
                </div>
            </form>
    </div>
  )
}

export default forgotpage