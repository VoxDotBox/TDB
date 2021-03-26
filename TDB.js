// Template Bot 

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

// require configuration file for listed varables params  
// TODO: check if config exists, create if false (with variables)


const { bottoken, prefix} = require('./config.json');
const fs = require('fs');
// forcing only js files
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
// login to Discord with your app's token, token in config
// Get token from discord.com/developers
client.login(bottoken);
// when the client is ready, run this code
// this event will only trigger one time after logging in

client.once('ready', () => {
    console.log('Ready!');
});

//message handling for commands

// Checking - If message sent by user doesn't start with Prefix, return with no behavior
// If message author is a bot, return no behavior
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
// create a variable called args
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

//better way to handle commands, user enters command, bot checks if command is a module in folder
    if (!client.commands.has(command)) {
        message.channel.send(`Invalid command. Use ${prefix}help for a list of commands.`);
    return;
    }
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send(`Something is wrong, try again.`);
    }
});
// TODO: use modules for commands
    // other commands...

