// Dependencies.
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

//mystuff
var port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

//app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/index.html'));
  //res.send('<h1>Hello world</h1>');
});

server.listen(port, function() {
  console.log('Starting server on port 5000');
});


var rooms = {};
class Room
{
  constructor(x, y, z, name, length, height)
  {
    this.x = x;
    this.y = y;
    this.z = z;
    this.name = name;
    this.height = height;
    this.width = width;
  }
}

house["r0_0"] = new Room(0,0,0,"entrance hall", 400, 1000)












var players = {};
io.on('connection', function(socket) {
  socket.on('new player', function() {
    players[socket.id] = {
      x: 300,
      y: 300
    };
  });
  socket.on('movement', function(data) {
    var player = players[socket.id] || {};
    if (data.left) {
      player.x -= 5;
    }
    if (data.up) {
      player.y -= 5;
    }
    if (data.right) {
      player.x += 5;
    }
    if (data.down) {
      player.y += 5;
    }
  });
});

setInterval(function() {
  io.sockets.emit('state', players);
  io.sockets.emit('rooms', rooms);
}, 1000 / 60);
