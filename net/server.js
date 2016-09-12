// server.js
var net = require('net');
var server = net.createServer(function(socket) { //'connection' listener
    console.log('server connected');
    socket.on('end', function() {
        console.log('server disconnected');
    });
    socket.on('data', function(){
        socket.end('hello\r\n');
    });
});
server.listen(8124, function() { //'listening' listener
    console.log('server bound');
});