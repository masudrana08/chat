import React, {useState} from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
    const [name, setName]=useState()
    const [room, setRoom]=useState()
    return (
        <div>
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="room" onChange={(e)=>setRoom(e.target.value)}/>
            <Link to={`/chatting?name=${name}&room=${room}`}>Join</Link>
        </div>
    )
}
