// On importe express, http, socket.io
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// On indique le chemin du fichier html à afficher
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// A chaque connexion, on va log un message, pareil à chaque déconnexion
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// On écoute sur le port 3000
http.listen(3000, () => {
  console.log('listening on *:3000');
});