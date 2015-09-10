// Socket server code goes here
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8000;
server.listen(port);
app.use(express.static('./public'));

io.on('connection', function (socket) {
  socket.on('stroke', function(data) {
    // {id, x, y}
    socket.broadcast.emit('stroke', data);
  })
})
