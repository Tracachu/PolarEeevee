const Discord = require("discord.js");
let bot = new Discord.Client();

exports.run = (bot, message, args, prefix) => {

//Get the queue
let server = bot.serverQueues[message.guild.id];

//Check if anything is playing
if(!server.queue[0]) return message.channel.send(`${bot.emojis.get("536599762195972117")} | Sorry! There is nothing playing.`);

//Get the queue
let queue = [];
server.songNames.forEach((song, i) => {

    //Push the items
    queue.push(`${i+1}. ${song}`)

});

let embed = new Discord.RichEmbed()
.setColor("BLUE")
.setTitle(`${message.guild.name}'s queue`)
.setThumbnail(message.guild.iconURL)
.setDescription(`${(queue.length > 15 ? '**The queue is too large. Only the next 15 songs can be shown.**' : '')}\n\n${queue.slice(0,15).join('\n')}`)
message.channel.send(embed);

}