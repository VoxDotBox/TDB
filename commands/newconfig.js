const fs = require("fs");
// const path = require("path");

    module.exports = {
    name: 'newconfig',
    description: 'creates a config file if one does not exist. If exists, requests for permission to overwrite.',
    execute(message) {
        if(fs.existsSync('config.json')) {
            message.channel.send(`${exists}`);
        }
        else {
            message.channel.send("Default config created..jk. I'm not really doing anything yet.");
        }
    },
};