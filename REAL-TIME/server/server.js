const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

let documentData = '';

io.on('connection', socket => {
  socket.emit('document', documentData);
  socket.on('document', data => {
    documentData = data;
    socket.broadcast.emit('document', data);
  });
});

app.use(cors());
app.get('/', (req, res) => res.send('Collaborative Editor Backend Running'));

server.listen(5000, () => console.log('Server listening on port 5000'));