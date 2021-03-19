// Template Bot 

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// require configuration file for listed varables params  
// TODO: check if config exists, create if false (with variables)
const { bottoken, prefix, ph1, ph2, ph3 } = require('./config.json');

// when the client is ready, run this code
// this event will only trigger one time after logging in

client.once('ready', () => {
    console.log('Ready!');
});

/* login to Discord with your app's token, token in config
    Get token from discord.com/developers */

client.login(bottoken);