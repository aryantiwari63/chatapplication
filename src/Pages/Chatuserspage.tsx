import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import profile from '../images/profile.jpg'
import Navbar from '../Components/Navbar';
import profile1 from '../images/profile1.jpg';
import profile2 from '../images/profile2.jpg';
import Chatpage from './Chatpage';
import Addfriend from './Addfriend';

function Chatuserspage() {
  const [addpage ,setAddpage] = useState(false); 

  const addfriend =()=>{
    setAddpage(!addpage);
  }
    
  

  return (

    <div className='bg-[rgba(27,32,38,255)] text-white text-sm min-h-[100vh] md:flex' >
      <div className='md:w-[50%]'>
        <div className='hidden md:block'> <Navbar /></div>

        <div className='bg-[rgba(56,59,68,255)] flex flex-col gap-y-2 py-3 px-4 '>
          <div className='flex justify-between pt-4'><div className='flex gap-x-3'><img src={profile} className='rounded-full h-[40px] w-[40px]' /> <p className='text-white text-xl font-bold text-center'>Chats</p></div> <div className='bg-[rgba(192,52,48,255)] w-[30px] h-[30px] rounded-full pt-1' ><FontAwesomeIcon icon={faPlus} className='text-xl font-bold ' onClick={addfriend}/></div></div>
          <div><input type="text" placeholder='search' className='bg-[rgba(41,45,54,255)] outline-none rounded-full placeholder-white-500 font-bold px-4 h-8 w-full' /></div>
        </div>

        <div className='flex flex-col gap-y-6 mt-6 px-4'>
          <div className='flex justify-between'>
            <div className='flex gap-x-12'>
              <div><img src={profile} className='rounded-full h-[50px] w-[50px]' /></div>
              <div className='text-start'><p className='text-[16px]'>arihant</p><p>hi how are you</p></div>
            </div>
            <div>
              <p>8.10</p>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='flex gap-x-12'>
              <div><img src={profile1} className='rounded-full h-[50px] w-[50px]' /></div>
              <div className='text-start'><p className='text-[16px]'>chetan</p><p>hi how are you</p></div>
            </div>
            <div>
              <p>11.15</p></div>
          </div>
              

          <div className='flex justify-between'>
            <div className='flex gap-x-12'>
              <div><img src={profile2} className='rounded-full h-[50px] w-[50px]' /></div>
              <div className='text-start'><p className='text-[16px]'>apoorv</p><p>hi how are you</p></div>
            </div><div>
              <p>4.05</p></div>
          </div>
        </div>
      </div>
         
       <Addfriend  addpage={addpage} addfriend={addfriend} />
      <div className='md:hidden'> <Navbar /></div>
      <div className='w-[50%]'>
        <div className='hidden md:block'><Chatpage /></div>
      </div>
         
    </div>
  )
}

export default Chatuserspage