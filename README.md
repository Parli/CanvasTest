# Simultaneous drawing application test

*Create a socket server that connects to multiple browser clients and sends drawing data between them to create a synchronized drawing application.*

The client should accept mouse input, and draw a line when the user clicks and drags on the canvas.

If another client is connected, they should see the same drawing appear on the other browser window.

If any client presses the `esc` key, all clients should clear their current image.

Places to write your code have been marked in `server.js` and `public/index.js`

You can load `index.js` directly from the file system if you want to work on that before building the server.

Please begin working on the test as soon as you receive it, and send it back to us as soon as you are done.

The following documentation will put you in the right direction:

## Node.js
* Simple server example: [https://nodejs.org/](https://nodejs.org/)
* `fs` module documentation, for loading files: [https://nodejs.org/](https://nodejs.org/api/fs.html)
* `http` module documentation, for creating a server: [https://nodejs.org/](https://nodejs.org/api/http.html)

## Socket.io
* Chat client example: [https://github.com/Automattic/socket.io/tree/master/examples/chat](https://github.com/Automattic/socket.io/tree/master/examples/chat)
* Server API documentation: [http://socket.io/docs/server-api/](http://socket.io/docs/server-api/)
* Client API documentation: [http://socket.io/docs/client-api/](http://socket.io/docs/client-api/)

## Canvas
* Basic usage tutorial: [https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
* `lineTo` documentation: [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
* `fillRect` documentation: [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)
