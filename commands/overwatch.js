const overwatch = require('overwatch-api');
const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    let tag = args[0];
    let platform = args[1];
    let region = args[2];

    overwatch.getProfile(platform, region, tag, (err, json) => {
        if (err) return message.reply("That user couldn\'t be found in my database!");
        console.log(json);
        let level = json.level;
        let username = json.username;
        let portrait = json.portrait;//My avatar in Overwatch
        let endorsement = json.endorsement;
        let elevel = endorsement['level'];
        let competetive = json.competitive;
        let compsr = competetive['rank']

        let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle(`Result for: ${tag}`)
        .addField("Username:", username, true)
        .addField("Level:", level, true)
        .addField("Endorsement Level:", elevel, true)
        .addField("Competetive SR Rank:", compsr, true)
        .setThumbnail(portrait)
        message.channel.send(embed)
        });
}