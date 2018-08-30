const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const config = require('./src/config');
const gameModel = require('./src/models/GameModel');

const { port } = config;

const gameState = gameModel;
gameState.init();

io.on('connection', (client) => {
  client.on('SubscribeToState', () => {
    client.emit('GameState', gameState);
    setInterval(() => {
      client.emit('GameState', gameState);
    }, 5000);
  });

  client.on('BuildSkeleton', () => {
    console.log('build Skeleton');

    gameState.skeletons.push({
      x: gameState.skeletons.length,
      y: gameState.skeletons.length,
      id: gameState.skeletons.length,
    });
    io.emit('GameState', gameState); // tell everyone
  });

  client.on('Clear', () => {
    gameState.skeletons = [];
    io.emit('GameState', gameState);
  });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
} else {
  // dev enviornment
  app.use(express.static(path.join(__dirname, 'src', 'public')));
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
  });
}

http.listen(port, () => console.log(`Listening on port ${port}`));
