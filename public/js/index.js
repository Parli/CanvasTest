(function() {
  window.socket = io();

  $(function () {
    socket.on('connect', function () {
      var $canvas = $('#canvas'),
          ctx = $canvas[0].getContext('2d');

      var lastX = undefined,
          lastY = undefined,
          myId = socket.id,
          users = {},
          me

      function newUser(id) {
        users[id] = users[id] || {
          id: id,
          lastX: undefined,
          lastY: undefined
        }
        return users[id]
      }

      me = newUser(myId)

      function mouseMove (evt) {
        var x = evt.offsetX,
            y = evt.offsetY

        draw(x,y,me)
        socket.emit('stroke', {id: myId, x: me.lastX, y: me.lastY});
      }

      function draw (x,y,user) {
        ctx.beginPath();
        ctx.moveTo(user.lastX,user.lastY);
        ctx.lineTo(user.lastX = x,user.lastY = y);
        ctx.stroke();
      }

      $canvas.on('mousedown', function(evt) {
        me.lastX = evt.offsetX,
        me.lastY = evt.offsetY

        $canvas.on('mousemove', mouseMove);
      })


      $canvas.on('mouseup', function (evt) {
        // STOP CAPTURING
        $canvas.off('mousemove', mouseMove);
        me.lastX = undefined;
        me.lastY = undefined
        socket.emit('stroke', {id: myId, x: me.lastX, y: me.lastY});
      })

      socket.on('stroke', function (data) {
        var user = newUser(data.id);
        draw(data.x,data.y,user)
      })
    })
  })
})()
