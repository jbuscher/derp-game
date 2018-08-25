import io from 'socket.io-client';
const port = window.location.href.includes('localhost') ? '5000' : '80'
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