const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('I am ready!');

  client.user.setActivity('iamfabriceg.xyz');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  console.log(message.content);

  const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

  if (command === 'ping') {
		client.commands.get('ping').execute(message, args);
	} else if (command === 'beep') {
		client.commands.get('beep').execute(message, args);
	} else if (command === 'server') {
		client.commands.get('server').execute(message, args);
	}
});


client.login(token);