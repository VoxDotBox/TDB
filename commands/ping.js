module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        message.channel.send('Pong. This is coming from ping.js - ggs!');
    },
};