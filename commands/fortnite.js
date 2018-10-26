
const Discord = require("discord.js");
const Client = require("fortnite")
const fortnite = new Client("fc05ef07-131b-4466-9bd6-62129fce262b")
exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    let username = args[0];
    let platform = args[1] || "pc";

    if(!username) return message.reply("Sorry! you must provide a username.");
    let data = fortnite.user(username, platform).then(data => {
    let stats = data.stats;
    let lifetime = stats.lifetime;
    let score = lifetime[6]['Score'];//done
    let mplayed = lifetime[7]['Matches Played'];//done
    let wins = lifetime[8]['Wins']; //done
    let winper = lifetime[9]['Win%'];//done
    let kills = lifetime[10]['Kills']; //done
    let kd = lifetime[11]['K/d'];//done
    

    let embed = new Discord.RichEmbed()
    .setTitle(`Fortnite stats for ${data.username}`)
    .setColor("BLUE")
    .addField("Wins", wins, true)
    .addField("Kills", kills, true)
    .addField("Score", score, true)
    .addField("Matches Played", mplayed, true)
    .addField("Wins Percentage", winper, true)
    .addField("K/D", kd, true)
    .setThumbnail("https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png/revision/latest?cb=20170806011008")
    message.channel.send(embed)
    });

}