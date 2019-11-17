const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('I am ready!');
});

client.on('message', message => {
  console.log(message.content);

  if (message.content === 'ping') {
    // send back "Pong." to the channel the message was sent in
    message.reply('Pong!');
  }
  if (message.content === 'twitch') {
    message.reply('https://twitch.tv/iamfabriceg');
  }

  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('Pong.');
  } else if (message.content.startsWith(`${prefix}beep`)) {
    message.channel.send('Boop.');
  }
});

client.login(token);