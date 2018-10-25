
const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Oh, no! I can't seem to find that user! :(");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("I'm not strong enough to do this! :sob:");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("OOF! This user has too many badges for you to train!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("BLUE")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "report-logs");
    if(!incidentchannel) return message.channel.send("I'm sorry, I can't find the channel I need. Please make a report-logs channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;

}