import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profile1 from '../images/profile1.jpg';

function Notificationpage() {
    return (
        <div>
            <div className='flex justify-between mx-2'>
                <div> <h2 className='font-bold text-xl'>Notification</h2></div>
                <div><FontAwesomeIcon icon={faXmark} /></div>
            </div>
          
              {/* senderid->userid, reciever->_id */}
           <div className='mt-6 mx-2 flex flex-col gap-y-8'>
            <div >
                <div className='flex gap-x-3'>
                    <div className='h-12 w-12'><img src={profile1} className='h-full w-full' /></div>
                    <div className='text-start'><p>Maya sharma</p><p>1hr ago</p></div>
                </div>
                <div className='flex justify-center gap-x-4 mt-2'>
                    <button className="bg-black text-white font-bold hover:bg-[rgb(85,44,212)] p-2 rounded-md">Accept</button><button className='bg-black text-white font-bold hover:bg-[rgb(85,44,212)] p-2 rounded-md'>Reject</button>
                </div>
            </div>
             
            <div >
                <div className='flex gap-x-3'>
                    <div className='h-12 w-12'><img src={profile1} className='h-full w-full' /></div>
                    <div className='text-start'><p>Maya sharma</p><p>1hr ago</p></div>
                </div>
                <div className='flex justify-center gap-x-4 mt-2'>
                    <button className="bg-black text-white font-bold hover:bg-[rgb(85,44,212)] py-2 px-3 rounded-md">Accept</button><button className='bg-black text-white font-bold hover:bg-[rgb(85,44,212)]  py-2 px-3  rounded-md'>Reject</button>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Notificationpage