
const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("How exactly do you expect me to boot someone that isn't even here?");
    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.channel.send("As much as I'm a-okay with a cold shoulder treatment, I still gotta have a reason to kick them.");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Yeah, uhm, no, you're not strong enough for that, bud. ~~Get rekt.~~");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("BLUE")
    .setThumbnail(`https://i.imgur.com/lsL2kMn.png`)
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason)
    .setfooter(`Boot to the head.`);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("I'm sorry, but you don't appear to have a wall of shame. Please create an #incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;

}
