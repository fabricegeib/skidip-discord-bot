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
  } else if (message.content === `${prefix}server`) {
    message.channel.send(`This server's name is: ${message.guild.name}`);
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } else if (message.content.startsWith(`${prefix}created`)) {
    message.channel.send(`${message.guild.createdAt}`);
  } else if (message.content.startsWith(`${prefix}region`)) {
    message.channel.send(`${message.guild.region}`);
  }
});

client.login(token);