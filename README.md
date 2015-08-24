# Simultaneous drawing application challenge

*Create a socket server that connects to multiple browser clients and sends drawing data between them to create a synchronized drawing application.*

## Setup

* Clone this repository on to your local machine.

* Run `npm install` to get the Socket.io dependency.

## Specifications

* The client should accept mouse input, and draw a line when the user clicks and drags on the canvas.

* All clients should see the same image at all times.

* If a new client connects, the existing image should be sent to them.

* If a client presses the `esc` key, the current image should be cleared for all clients, and all server image history should be erased.

* If a client disconnects, all of the lines drawn by that client should be removed.

* If a client presses the `s` key, all lines that that client has drawn up until that point should be saved, and not be removed when they disconnect. Any lines drawn by them *after* they saved should still be removed when they disconnect.

* The server state does not need to persist if the server is restarted.

## Notes

* Places to write your code have been marked in `server.js` and `public/index.js`

* You can load `index.js` directly from the file system if you want to work on the client before building the server.

* Be prepared to answer some follow up questions after you complete the task.

* I will be available for the entire time you are working on the task to answer any questions you have. AMAA, you can contact me through tmetler@gmail.com on hangouts or email.

## Documentation

### Socket.io
* Chat client example: [https://github.com/Automattic/socket.io/tree/master/examples/chat](https://github.com/Automattic/socket.io/tree/master/examples/chat)

### Canvas
* `lineTo` documentation: [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
* `clearRect` documentation: [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)
