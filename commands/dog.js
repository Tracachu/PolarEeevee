const Discord = require("discord.js");
const superagent = require("superagent");
exports.run = async (bot, message, args, prefix) => {

    if(message.author.bot) return;
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .setTitle("Woof :dog2:")
    .setImage(body.message)
    message.channel.send({embed})
}