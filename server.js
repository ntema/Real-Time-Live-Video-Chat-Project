const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')
const mongoose = require('mongoose')
app.set('view engine', 'ejs')
app.use(express.static('public'))


const dbURI = 'mongodb://127.0.0.1:27017/testdb'
 const conn = mongoose.connect(dbURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('database connected')
    }).catch((err)=>{
        console.log(err)
    })
    
app.use(express.urlencoded({ limit: "1000000mb", extended: true }));
app.use(express.json({ limit: "1000000mb", extended: true }));
  //routes
  //routes
app.use('/api/auth', require('./Routes/auth/register'))
app.use('/api/auth', require('./Routes/auth/login'))
app.use('/api/user', require('./Routes/userRoutes/getAllUser'))
app.use('/api/user', require('./Routes/userRoutes/getSingleUser'))
app.use('/api/user', require('./Routes/userRoutes/updateUser'))
app.use('/api/user', require('./Routes/userRoutes/deleteUser'))
app.use('/api/transaction', require('./Routes/transaction/creditWallet'))
app.use('/api/transaction', require('./Routes/transaction/withdraw'))
app.use('/api/transaction', require('./Routes/transaction/transfer'))


app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        status: error.status || 500,
        message: error.message,
      },
    });
  });

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

 app.listen(3000, console.log('server running on port 3000'))



