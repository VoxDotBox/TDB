module.exports = {
    name: 'backup',
    description: 'template for backup command!',
    execute(message, args) {
        message.channel.send('backing up nothing, just thought you should know');
    },
};