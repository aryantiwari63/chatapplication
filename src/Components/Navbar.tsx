import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
  return (
    <div className='fixed bottom-0 w-full md:static'>
         <nav className='flex justify-evenly rounded-full mx-2 py-2 bg-[rgba(56,59,68,255)]'>
            <div className='rounded-full w-[40px] h-[40px] bg-[rgba(41,45,54,255)]'><FontAwesomeIcon icon={faMessage} className='text-[rgba(192,52,48,255)] text-xl mt-2'/></div>
            <div className='rounded-full w-[40px] h-[40px] bg-[rgba(41,45,54,255)] '><FontAwesomeIcon icon={faBell} className='text-[rgba(192,52,48,255)] text-xl mt-2'/></div>
            <div className='rounded-full w-[40px] h-[40px] bg-[rgba(41,45,54,255)] '><FontAwesomeIcon icon={faMessage} className='text-[rgba(192,52,48,255)] text-xl mt-2'/></div>
            <div className='rounded-full w-[40px] h-[40px] bg-[rgba(41,45,54,255)] '><FontAwesomeIcon icon={faMessage} className='text-[rgba(192,52,48,255)] text-xl mt-2'/></div>
         </nav>
    </div>
  )
}

export default Navbar