const pino = require('pino');

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'yyyy-dd-mm, h:MM:ss TT',
        },
    },
});

module.exports = logger;
