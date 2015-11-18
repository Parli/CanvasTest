// Socket server code goes here
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8000;
server.listen(port);
app.use(express.static('./public'));

// Chatroom

// usernames which are currently connected to the chat
var users = {
 permanent: {
  lines: []
 }
};

io.on('connection', function (socket) {
  // when the client emits 'new message', this listens and executes

  users[socket.id] = {
    lines: []
  };

  socket.on('draw', function (line) {
    // we tell the client to execute 'new message'
    //lines.push(line);
    users[socket.id].lines.push(line);
    socket.broadcast.emit('draw', line);
  });

  socket.on('catch up', function () {
    socket.emit('redraw', users);
  });

  socket.on('save', function () {
      var user = users[socket.id];
      var savedLines = user.lines.splice(0, user.lines.length);
      users.permanent.lines = users.permanent.lines.concat(savedLines);
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
      delete users[socket.id];
      socket.broadcast.emit('redraw', users);
  });

  socket.emit('redraw', users);

});
