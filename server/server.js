

const app = require('express')();
const httpServer = require('http').createServer(app);
const {addUser, removeUser} = require('./handle/users')

const io = require("socket.io")(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });



io.on('connection', (socket) => {
  socket.on('join', ({name, room}, callback)=>{
    const {user, error} = addUser(socket.id, name, room)
    if (error){
        callback(error)
    }

    socket.on('disconnect', ()=>{
        const users= removeUser(socket.id)
        callback(users)
    })
  })
  
  
});

httpServer.listen(4000, () => {
  console.log('listening on *:3000');
});