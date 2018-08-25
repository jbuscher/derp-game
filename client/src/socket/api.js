import openSocket from 'socket.io-client';
const port = process.env.PORT || 5000;
const url = process.env.NODE_ENV === 'production' ? 'https://derp-game.herokuapp.com:' : 'http://localhost:'
const socket = openSocket(url + port);

function subscribeToGameState(cb) {
    socket.on('GameState', gameState => cb(null, gameState));
    socket.emit('SubscribeToState');
}

function buildSkeleton() {
    console.log('sending event');
    socket.emit('BuildSkeleton');
}

export { subscribeToGameState, buildSkeleton }