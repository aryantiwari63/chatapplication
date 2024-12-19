import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import messageimg from '../images/3.jpg';
import { Link } from 'react-router-dom';
import {loginservice} from '../Services/auth/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login() {
           const [email, setEmail] = useState("");
           const [password, setPassword] = useState("");
         const navigate = useNavigate();

       const handleform = async(e: React.FormEvent)=>  {
        e.preventDefault();
             const res = await loginservice(email,password);
             //store token & refresh token    
             const notify = ()=>{ toast("login successfully!"); } 
             if(res.status === 200) {
               notify();
               const { token } = res.data;
               sessionStorage.setItem('token',token);
               setTimeout(() => {
                navigate("/chatuserpage");
              }, 3000);
             }
           }

  return (
    <div>
          <div className='h-[260px] w-[90%] '>
        <img src={messageimg} className='h-full w-full'/>
       </div> 
        <div>
            <form className='p-2 flex flex-col gap-y-3' onSubmit={handleform}>
                 <div >
                        
                       <FontAwesomeIcon icon={faEnvelope}/>
                       <input type="email" placeholder="Enter email" className='ml-2 outline-none' onChange={(e)=>setEmail(e.target.value)}/>
                 </div>
                 <div>
                 
                 <FontAwesomeIcon icon={faLock}/>
                       <input type="password" placeholder="Enter password" className='ml-2 outline-none'  onChange={(e)=>setPassword(e.target.value)}/>
                 </div>
                  <p className='text-sm w-[74%] text-end'><Link to="/forgot">Forgot password?</Link></p>
                 <button className='bg-[rgb(1,196,246)] w-[70px] my-2 text-white rounded-md mx-auto'>Login</button>
                 <p className='text-sm'>Don't have an account? <span className='text-[rgb(1,196,246)]'><Link to="/signup">Sign up</Link></span></p>
            </form>
            <ToastContainer />
        </div>
    </div>
  );
}

export default Login;
