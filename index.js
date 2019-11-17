const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('Pong!');
//   }
// });

client.login('NTE3NTEzNTM0NTA3MTg4MjI1.XdCgew.t10f5HvN8IjQxYUxLRVAdTnD0GE');