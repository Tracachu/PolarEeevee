
const Discord = require("discord.js");
var d20 = require('d20');
exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    if(isNaN(args[0])) return message.channel.send(":no_entry_sign: | That is Not A Number!");

    let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField("Sides :game_die: :", `\`\`\`${args[0]}\`\`\``)
    .addField("Number Rolled :game_die: :", `\`\`\`${d20.roll(args[0])}\`\`\``)
    message.channel.send(embed)

}