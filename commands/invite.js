//Constants
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

//Send the embed
let embed = new Discord.RichEmbed()
.setColor(bot.embedColor)
.setTitle("Invite " + bot.user.username)
.setThumbnail(bot.user.avatarURL)
.setDescription(`[Invite](https://discordapp.com/oauth2/authorize?client_id=477137889268989963&permissions=8&scope=bot) Lil' Eevee to your server! `)
message.channel.send(embed);

};
