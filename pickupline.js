const Discord = require("discord.js");
var liner = require('hubot-flirt');

exports.run = (bot, message, args, prefix) => {
 

// Get a random joke
liner.getRandomJoke (function(flirt) {

  console.log(joke);
  const embed = new Discord.RichEmbed()
  .setTitle("Random Pickup Line")
  .setColor("RANDOM")
  .setThumbnail(`https://i.imgur.com/CqPloZ5.png`)
  .setFooter("Requested by" + ` ${message.author.username}` )
  .setDescription(flirt)
  message.channel.send({embed});

});

}