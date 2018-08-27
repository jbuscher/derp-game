const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const gameModel = require('./server_modules/GameModel');

const port = process.env.PORT || 5000;

var gameState = gameModel;
gameState.init();

io.on('connection', (client) => {
  client.on('SubscribeToState', () => {
    client.emit('GameState', gameState)
    setInterval(() => {
        client.emit('GameState', gameState)
    }, 5000);
  });

  client.on('BuildSkeleton', () => {
      console.log('build Skeleton');
      gameState.skeltonCount++;
      io.emit('GameState', gameState); // tell everyone
  })

  client.on('Clear', () => {
    gameState.skeltonCount = 0;
    io.emit('GameState', gameState);
  })
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files  
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

http.listen(port, () => console.log(`Listening on port ${port}`));
