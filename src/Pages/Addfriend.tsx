import { faCross, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { addfriendservice } from '../Services/user/addfriend';

interface AddfriendProps {
    addpage: boolean;  
    addfriend: () => void;  
  }

function Addfriend({ addpage, addfriend }: AddfriendProps){

     const [email, setEmail] = useState("");

    if (!addpage) return null;

     const handlefriend = async()=>{
      const res = await addfriendservice(email);

     }

  return (
    <div className='fixed inset-0 px-6 '>
      
           <div className=' font-bold bg-[rgb(132,196,203)] h-[30%] mx-auto rounded-md w-[70%] sm:w-[40%] mt-16 pt-3'>
            <div className='text-end mr-2'>
            <FontAwesomeIcon icon={faXmark} className='font-bold text-xl' onClick={ addfriend}/>
            </div>
            <form className='flex flex-col mt-2'>
             <input type="email" placeholder='enter email' className='outline-none rounded-full text-black w-[190px] mx-auto' onChange={(e)=>{setEmail(e.target.value)}}/>
             
             <button className='bg-green-500 w-[100px] rounded-md py-1 my-3 mx-auto' onClick={handlefriend}>Send request</button>
             </form>
           </div>
    </div>
  )
}

export default Addfriend