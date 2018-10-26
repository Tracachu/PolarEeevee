
const Discord = require("discord.js");
let bot = new Discord.Client();


exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.fetchMessages()
           .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
    }
}