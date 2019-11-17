const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('I am ready!');
});

client.on('message', msg => {
  console.log(msg.content);

  if (msg.content === 'ping') {
    // send back "Pong." to the channel the message was sent in
    msg.reply('Pong!');
  }
  if (msg.content === 'twitch') {
    msg.reply('https://twitch.tv/iamfabriceg');
  }
});

client.login(config.token);