
const Discord = require("discord.js");
var math = require('mathjs');
exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;
    let input = args.join(" ");
    if (!input) {
        message.reply('Sorry, I cannot provide an answer without an equation!');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`**That... that's not math...** ${err}`);
    }

    const embed = new Discord.RichEmbed()
        .setThumbnail("https://i.imgur.com/4kXujAW.png")
        .setColor('RANDOM')
        .addField("**Input:**", question, true)
        .addField("**Output:**", answer)
        .setFooter(`Image made my MatthewJ217#3287`)

    message.channel.send({
        embed
    })

}
