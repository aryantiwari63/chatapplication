import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import img2 from '../images/3.jpg';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='flex flex-col gap-y-4'>
        <div className='h-[260px] w-[90%] '>
        <img src={img2} className='h-full w-full'/>
       </div> 
      <form className='p-2 flex flex-col gap-y-6'>
        <div>
             
        <FontAwesomeIcon icon={faUser}/>
          <input type="text" placeholder="Username" className='outline-none'/>
        </div>
        <div>
        
        <FontAwesomeIcon icon={faEnvelope}/>
          <input type="email" placeholder="Email" className='outline-none'/>
        </div>
        <div>
         
        <FontAwesomeIcon icon={faLock}/>
          <input type="password" placeholder="Password" className='outline-none'/>
        </div>
        <button type="submit" className="bg-[rgb(1,196,246)] w-[70px] py-1 text-white rounded-md mx-auto">Sign Up</button>
        <p >Already have an account? <span className="text-[rgb(1,196,246)]"><Link to="/login">Login</Link></span></p>
      </form>
    </div>
  );
}

export default Signup;
