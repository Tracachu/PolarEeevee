const Discord = require("discord.js");
const superagent = require("superagent");
exports.run = async (bot, message, args, prefix) => {

    if(message.author.bot) return;
    let{body} = await superagent
    .get(`http://aws.random.cat/meow`);
  
    let catembed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle("Meow 🐱")
    .setImage(body.file);
  
    message.channel.send(catembed);
}