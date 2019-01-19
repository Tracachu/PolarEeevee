
const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("The wrath of the ban hammer has missed. Please try again and tag the user?");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("A little over your head there, aren't you? You don't have permission to ban members.");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("OOF! This user has too many badges for you to train!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("BLUE")
    .setThumbnail(`https://i.imgur.com/2G1K38P.png`)
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason)
    .setfooter("Bant Hammer'd");

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("I'm sorry, I can't find the channel I need. Please make an #incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;

}
