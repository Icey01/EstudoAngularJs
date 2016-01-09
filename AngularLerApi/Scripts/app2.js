io = require('socket.io');

var socket = io.listen(app);
socket.on('connection', function(client) {
    client.on('message', function(data) {
      client.broadcast(data);
    });
});