const Discord = require("discord.js");
let bot = new Discord.Client();

exports.run = (bot, message, args, prefix) => {

//Get the queue
let server = bot.serverQueues[message.guild.id];

//Skip the song
server.dispatcher.end();

//Send the confirmation
message.channel.send(`${bot.emojis.get("536599762195972117")} | Skipping...`);

}