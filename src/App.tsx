import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgot from './Pages/Forgotpage';
import Navbar from './Components/Navbar';
import Chatpage from './Pages/Chatpage';
import Chatuserspage from './Pages/Chatuserspage';
import Notificationpage from './Pages/Notificationpage';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/forgot" element={<Forgot/>}/>
       <Route path="/chatpage" element={<Chatpage/>}/>
       <Route path="/chatuserpage" element={<Chatuserspage/>}/>
       <Route path="/notification" element={<Notificationpage/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
