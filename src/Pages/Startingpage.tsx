import React from 'react'
import { Link } from 'react-router-dom'

function Startingpage() {
  return (
    <div>
         <p>starting page</p>
         <button><Link to='/login'>start</Link></button>
    </div>
  )
}

export default Startingpage