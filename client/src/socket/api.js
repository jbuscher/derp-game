import openSocket from 'socket.io-client';
const port = process.env.PORT || 5000;
const socket = openSocket('http://localhost:' + port);

function subscribeToGameState(cb) {
    socket.on('GameState', gameState => cb(null, gameState));
    socket.emit('SubscribeToState');
}

function buildSkeleton() {
    console.log('sending event');
    socket.emit('BuildSkeleton');
}

export { subscribeToGameState, buildSkeleton }