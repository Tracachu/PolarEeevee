
const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    if(!args[0]) return message.reply("Please give me a question!");
    let replies = ["Of course", "My database says no", "Seven.", "There could be a chance", "Please ask again later", "I don't know", "Possibly", "The stars say yes", "The stars say no", "Ask again later", "Wait and see"];
    
    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ").replace((/`/g,'\`')) + (" ");
    
    let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField("Question :speech_balloon: :", `\`\`\`${question}\`\`\``)
    .addField("Answer :inbox_tray: :", `\`\`\`${replies[result]}\`\`\``)
    message.channel.send(embed)
}