# Simultaneous drawing application challenge

*Create a socket server that connects to multiple browser clients and sends drawing data between them to create a synchronized drawing application.*

## Setup

* Clone this repository on to your local machine.

* Run `npm install` to get the Socket.io dependency.

## Specifications

* The client should accept mouse input, and draw a line when the user clicks and drags on the canvas.

* Any lines drawn by a client should be sent to the other clients and reproduced on their screens.

## Notes

* Places to write your code have been marked in `server.js` and `public/index.js`

* You can load `index.js` directly from the file system if you want to work on the client before building the server.

* Be prepared to answer some follow up questions after you complete the task.

* I will be available for the entire time you are working on the task to answer any questions you have.

## Documentation

### Canvas
* `lineTo` documentation: [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
* `clearRect` documentation: [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)


### Socket.io
* Chat client example: [https://github.com/Automattic/socket.io/tree/master/examples/chat](https://github.com/Automattic/socket.io/tree/master/examples/chat)
* Server documentation: [https://socket.io/docs/v4/server-initialization/](https://socket.io/docs/v4/server-initialization/)
* Client documentation: [https://socket.io/docs/v4/client-socket-instance/](https://socket.io/docs/v4/client-socket-instance/)
