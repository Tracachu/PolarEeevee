
const gifSearch = require("gif-search");

const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;
    if(!message.channel.nsfw) return message.reply("🔞 | Please use this command in an NSFW channel.");
    if (message.channel.type == "dm") return message.reply("🔞 | Sorry! you can't use this command in a DM.");

    gifSearch.random(args[0]).then(
        gifUrl => {
            let embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setImage(gifUrl)
            message.channel.send(embed)
        }
    );
}