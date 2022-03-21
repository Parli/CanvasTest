## Specifications

* The client should accept mouse input, and draw a line when the user clicks and drags on the canvas.

* Any lines drawn by a client should be sent to the other clients and reproduced on their screens.

* The server state does not need to persist if the server is restarted.

## Additional Specifications

* All clients should see the same image at all times

* If a new client connects, the existing image should be sent to them.

* If a client disconnects, all of the lines drawn by that client should be removed for all clients.

* Implement undo for all clients

* Implement redo for all clients
