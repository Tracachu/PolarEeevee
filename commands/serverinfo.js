exports.run = (client, message, args) => {
    const group = message.channel;
    if (group.type !== "group") return;
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    .setTitle("Group Info")
    .setColor(4447003)
    .setThumbnail(`message.guild.iconURL`)
    .setFooter(`<#${group.id}>`)
    .addField("Server Name", message.guild.name)
    .addField("Group ID", group.id)
    .addField("Group Owner", group.owner.tag)
    .addField("Members", message.guild.memberCount)
    .addField("Created At", message.guild.createdAt);
    message.channel.send({embed});
    }