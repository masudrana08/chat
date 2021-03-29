import React, {useEffect, useState} from 'react'
import queryString from 'query-string'
import {useHistory} from 'react-router'
import io from 'socket.io-client'
let socket;
function Chatting() {
    const [messages, setMessages] = useState([])
    const history = useHistory()
    const {name, room} = queryString.parse(history.location.search)

    useEffect(() => {
		socket = io("http://localhost:4000");
        socket.emit('join',{name, room}, (data)=>{
           console.log(data);
        })
        socket.on('message', (mymsg)=>{
            setMessages((existingMessages)=>[...existingMessages, mymsg])
        })
    }, []
    )
    
    const handleMessage = (e)=>{
        if (e.key == 'Enter' && e.target.value){
            socket.emit('message', e.target.value)
            e.target.value = ''
        }
    }
    return (
        <div>
            <div>Room</div>
            <div>
                {messages.map((msg, id)=>{
                    return (
                        <div key={id}>{msg.user}: {msg.text}</div>
                    )
                })}
            </div>
            <input type="text" placeholder="type your message" onKeyUp={handleMessage}/>
        </div>
    )
}
export default Chatting