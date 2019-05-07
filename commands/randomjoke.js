const Discord = require("discord.js");
var joker = require('random-joke-getter');

exports.run = (bot, message, args, prefix) => {
 

// Get a random joke
joker.getRandomJoke (function(joke) {

  console.log(flirt);
  const embed = new Discord.RichEmbed()
  .setTitle("Random Joke")
  .setColor("RANDOM")
  .setThumbnail(`https://i.imgur.com/CqPloZ5.png`)
  .setFooter("Requested by" + ` ${message.author.username}` ) // You need a + also thats how you show the user name
  .setDescription(joke) // I want the joke to go here, how would that go? Ez Pz Stronk!
  message.channel.send({embed});

});

}
