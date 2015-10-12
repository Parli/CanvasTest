// Socket server code goes here
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 80;
server.listen(port);
app.use(express.static('./public'));

var clientLineVertices = {};
var clientLineSaved = {};

io.on('connection', function(socket) {

  socket.on('mousedown', function(location) {
    socket.broadcast.emit('mousedown', {
      location: location
    });
    if (!clientLineVertices[socket.id]) {
      clientLineVertices[socket.id] = [];
    }
    // each array represent a line
    clientLineVertices[socket.id].push([location]);
  });

  socket.on('mousemove', function(location) {
    socket.broadcast.emit('mousemove', {
      location: location
    });

    // push the vertex into the array
    clientLineVertices[socket.id][clientLineVertices[socket.id].length-1].push(location);
  });

  socket.emit('drawhistory', {
    lines: clientLineVertices
  });

  socket.on('saveline', function() {
    clientLineSaved[socket.id] = {
      lineIndex: clientLineVertices[socket.id].length
    };
  });

  socket.on('disconnect', function() {
    if (clientLineSaved[socket.id]) {
      var upToLineIndex = clientLineSaved[socket.id].lineIndex;
      clientLineVertices[socket.id] = clientLineVertices[socket.id].slice(0, upToLineIndex);
    } else {
      delete clientLineVertices[socket.id];
    }
    socket.broadcast.emit('redraw', { lines: clientLineVertices });
  });
});
