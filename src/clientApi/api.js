import io from 'socket.io-client';
const port = window.location.href.includes('localhost') ? '5000' : '80'
const socket = io({port: port});

function subscribeToGameState(cb) {
    socket.on('GameState', gameState => cb(null, gameState));
    socket.emit('SubscribeToState');
}

function buildSkeleton() {
    socket.emit('BuildSkeleton');
}

function clear() {
    socket.emit('Clear');
}

export { subscribeToGameState, buildSkeleton, clear }