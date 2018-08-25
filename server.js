const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 5000;

var gameState = {
  skeletonCount: 0,
}
io.on('connection', (client) => {
  client.on('SubscribeToState', () => {
    client.emit('GameState', gameState)
    setInterval(() => {
        client.emit('GameState', gameState)
    }, 1000);
  });

  client.on('BuildSkeleton', () => {
      var newCount = gameState.skeletonCount+1;
      gameState = {
          skeletonCount: newCount,
      }
      console.log('building new skelly')
      client.emit('GameState', gameState);
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
