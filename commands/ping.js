
const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField('```Hello, Professor! My heart rate is ```', new Date().getTime() - message.createdTimestamp + " ms ")
    message.channel.send(embed)
}
