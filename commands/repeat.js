const Discord = require("discord.js");
let bot = new Discord.Client();

exports.run = (bot, message, args, prefix) => {

//Get the queue
let server = bot.serverQueues[message.guild.id];

//Check if anything is playing
if(!server.queue[0]) return message.channel.send(`${bot.emojis.get("536599762195972117")} | Sorry! There is nothing playing.`);

//Find out if repeat is on or off
if(server.repeat === false) {

    //Turn repeat on
    server.repeat = true;

    //Send the message
    message.channel.send(`${bot.emojis.get("536599762195972117")} | Repeat is now **on**.`);

    //Return
    return;

} else if(server.repeat === true) {

    //Turn repeat off
    server.repeat = false

    //Send the message
    message.channel.send(`${bot.emojis.get("536599762195972117")} | Repeat is now **off**.`);

}

}