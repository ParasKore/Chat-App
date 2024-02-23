import React, { useState ,useRef } from 'react'
import { Auth } from './components/Auth'
import Cookies from 'universal-cookie'
import { Chat } from './components/chat'

import './App.css'
const cookies=new Cookies();
function App(){
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const roomInputRef=useRef(null)
  if(!isAuth){
  return(
    <div>
      <Auth setIsAuth={setIsAuth}/>
      
    </div>
  )
  }
  return <div> { room ? (<Chat room={room} />) : <div className='room' > <label className='label' >
    Enter Room Name
    </label> 
    <input className='input' ref={roomInputRef} />
    <button className='button' onClick={()=>setRoom(roomInputRef.current.value)} >Enter Chat</button>
    </div> } </div>
}

export default App