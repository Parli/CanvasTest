# Simultaneous drawing application challenge

*Create a socket server that connects to multiple browser clients and sends drawing data between them to create a synchronized drawing application.*

## Specifications

* The client should accept mouse input, and draw a line when the user clicks and drags on the canvas.

* All clients should see the same image at all times.

* If a new client connects, the existing image should be sent to them.

* If a client presses the `esc` key, the current image should be cleared for all clients, and all server image history should be erased.

* If a client disconnects, all of the lines drawn by that client should be removed.

* If a client presses the `s` key, all lines that they have drawn up until that point should be saved, and not be removed when they disconnect. Any lines drawn by them *after* they saved should still be removed when they disconnect.

## Tips

* Places to write your code have been marked in `server.js` and `public/index.js`

* You can load `index.js` directly from the file system if you want to work on the client before building the server.

* Please begin working on the challenge as soon as you receive it, and send it back to us as soon as you are done.

* I will be available for the entire time you are working on the challenge to answer any questions you have. AMAA, you can contact me through tmetler@gmail.com on hangouts or email.

## Documentation

### Node.js
* Simple server example: [https://nodejs.org/](https://nodejs.org/)
* `fs` module documentation, for loading files: [https://nodejs.org/](https://nodejs.org/api/fs.html)
* `http` module documentation, for creating a server: [https://nodejs.org/](https://nodejs.org/api/http.html)

### Socket.io
* Chat client example: [https://github.com/Automattic/socket.io/tree/master/examples/chat](https://github.com/Automattic/socket.io/tree/master/examples/chat)
* Server API documentation: [http://socket.io/docs/server-api/](http://socket.io/docs/server-api/)
* Client API documentation: [http://socket.io/docs/client-api/](http://socket.io/docs/client-api/)

### Canvas
* Basic usage tutorial: [https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
* `lineTo` documentation: [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
* `fillRect` documentation: [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)
