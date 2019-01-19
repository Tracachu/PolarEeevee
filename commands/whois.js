const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

//Check if a user has been mentioned
if(!message.mentions.users.first()) return message.channel.send("Sorry! Please mention a user."); //What shall it say if a user hasn't been mentioned?

//Get the user
let member = message.guild.member(message.mentions.users.first().id);
if(!member) return message.reply("Preeeeeetty sure that's not a real person.");

//Send the embed with the info
let embed = new Discord.RichEmbed()
.setColor("RANDOM") //RAINBOWS xD JK xD
.setTitle(`Information for ${member.user.tag}`)
.setThumbnail(member.user.avatarURL)
.addField(`User Name`, `${groupMember.username} (${groupMember.tag})`)
.addField("ID", member.id)
.addField("Discriminator", member.user.discriminator)
.addField("Joined Discord at", member.user.createdAt)
.addField("Joined Server on", guild.joinedAt)
message.channel.send(embed);

};
