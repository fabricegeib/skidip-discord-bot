const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === 'twitch') {
    msg.reply('https://twitch.tv/iamfabriceg');
  }
});

client.login('NjQ1NDM5NDkxNjMyNTI5NDM5.XdCmaw.vHUahWkeVHotJ-qjuwxBCBR80ZI');