
const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;
 
    
     if(!message.mentions.members.first()) {

        let embed1 = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("You have to tag someone in order to catch them!")
        .setImage("https://i.imgur.com/eBUjz6w.gif")
        message.channel.send(embed1)

        return;
        
    }
    

    let replies = ["emebd2", "embed3", "embed4"];
    
    let user = message.mentions.users.first();
    let member = message.guild.members.get(user.id);

    let embed2 = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`Success! The wild ${member.user.tag} was caught!`) 
    .setImage("https://i.imgur.com/Y2auGcZ.gif");

    let embed3 = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`Looks like you tried a little too hard there...`)
    .setImage("https://i.imgur.com/XD8e7al.gif");
    
    let embed4 = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`Ono, it looks like ${member.user.tag} doesn't like their new home...`) 
    .setImage("https://i.imgur.com/Q04RAEl.gif");


    let result = Math.floor((Math.random() * replies.length));

    if(replies[result] === "embed2") return message.channel.send(embed2);
    if(replies[result] === "embed3") return message.channel.send(embed3);
    if(replies[result] === "embed4") return message.channel.send(embed4);


    
    
}

//np
