import io from 'socket.io-client';
const port = process.env.PORT || 5000;
const socket = io({port: port});

function subscribeToGameState(cb) {
    socket.on('GameState', gameState => cb(null, gameState));
    socket.emit('SubscribeToState');
}

function buildSkeleton() {
    console.log('sending event');
    socket.emit('BuildSkeleton');
}

export { subscribeToGameState, buildSkeleton }