import React, {useEffect} from 'react'
import queryString from 'query-string'
import {useHistory} from 'react-router'
import io from 'socket.io-client'
let socket;
function Chatting() {
    
    const history = useHistory()
    const {name, room} = queryString.parse(history.location.search)

    useEffect(() => {
		socket = io("http://localhost:4000");
        socket.emit('join',{name, room}, (data)=>{
           console.log(data);
        })
    }
    )
    return (
        <div>
            chatting
        </div>
    )
}
export default Chatting