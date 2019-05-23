//Constants
let Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setImage("https://i.imgur.com/V2sbeiw.gif")
    .setTitle(`N... N... Noms?! 🤤`)
    .setFooter(`Maybe you should feed me...`)
    .setColor(bot.embedColor)
    message.channel.send(embed);

} 