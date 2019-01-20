const Discord = require("discord.js");
let bot = new Discord.Client();

exports.run = (bot, message, args, prefix) => {

//Get the queue
let server = bot.serverQueues[message.guild.id];

//Check if anything is playing
if(!server.queue[0]) return message.channel.send(`${bot.emojis.get("536599762195972117")} | Sorry! There is nothing playing.`);

//Check if a volume is specified
if(!args[0]) return message.channel.send(`${bot.emojis.get("536599762195972117")} | Sorry! Please specify a volume between 0 - 200.`);



//Set the volume 
server.dispatcher.setVolume(parseInt(args[0] / 100));
server.volume = args[0];

//Send the confirmation
message.channel.send(`${bot.emojis.get("536599762195972117")} | Success! I've set the volume to ${args[0]}/200.`);

}