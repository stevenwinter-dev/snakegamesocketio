const io = require('socket.io')();
const { createGameState } = require('./game');
const { FRAME_RATE } = require('./constants');

io.on('connection', client => {
    const state = createGameState();

    startGameInterval(client, state);
});

function startGameInterval(client, state) {
    const intervalId = setInterval(() => {
        const winner = gameLoop(state);
    }, 1000 / FRAME_RATE)
}

io.listen(3000);