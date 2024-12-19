import { faArrowLeft, faCamera, faMicrophone, faPaperclip, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profile from "../images/profile.jpg";
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

function Chatpage() {
  return (
    <div className='bg-[rgba(27,32,38,255)] min-h-[100vh] text-white'>
     <div className='bg-[rgba(56,59,68,255)] flex justify-between px-3 py-2'>
            <div className='rounded-full w-[40px] h-[40px] bg-[rgba(41,45,54,255)]'><FontAwesomeIcon icon={faArrowLeft} className='text-[rgba(192,52,48,255)] text-xl mt-2'/></div>
            <div className='flex gap-x-3  rounded-full bg-[rgba(41,45,54,255)] text-white '>
          
                <div className='w-10 h-10 '><img src={profile} className='rounded-full'/></div>
                <div className='text-start'><p>chetan sharma</p><p className='text-sm'>typing...</p>  </div>
       
                </div>
            <div className='rounded-full w-[40px] h-[40px] bg-[rgba(41,45,54,255)]'><FontAwesomeIcon icon={faPhone} className='text-[rgba(192,52,48,255)] text-xl mt-2'/></div>
            
     </div>

     <div>
          <p>day(today)</p>
          <p>messages</p>
     </div>
     
     <div className='w-full flex justify-evenly fixed bottom-0  pb-3 '>
      <div className='flex gap-x-2'> <FontAwesomeIcon icon={faFaceSmile} className='text-[rgba(192,52,48,255)] cursor-pointer text-xl'/><input type="text" placeholder='type a message' className='bg-[rgba(41,45,54,255)] outline-none rounded-full h-6 text-white'/><FontAwesomeIcon icon={faPaperclip} className='text-[rgba(192,52,48,255)] cursor-pointer text-xl'/><FontAwesomeIcon icon={faCamera} className='text-[rgba(192,52,48,255)] cursor-pointer text-xl'/></div>
      <div className='bg-[rgba(192,52,48,255)] h-6 w-6 rounded-full'><FontAwesomeIcon icon={faMicrophone} className='text-xl'/></div>
     </div>
     

     
    </div>
  )
}

export default Chatpage