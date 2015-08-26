## Specifications

* The client should accept mouse input, and draw a line when the user clicks and drags on the canvas.

* Any lines drawn by a client should be sent to the other clients and reproduced on their screens.

## Additional Specifications

* All clients should see the same image at all times

* If a new client connects, the existing image should be sent to them.

* If a client presses the `esc` key, the current image should be cleared for all clients, and all server image history should be erased.

* If a client disconnects, all of the lines drawn by that client should be removed for all clients.

* If a client presses the `s` key, all lines that that client has drawn up until that point should be saved, and not be removed when they disconnect. Any lines drawn by them *after* they saved should still be removed when they disconnect.

* The server state does not need to persist if the server is restarted.
