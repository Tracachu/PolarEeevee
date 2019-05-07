const Discord = require("discord.js");
var request = require('request');

exports.run = (bot, message, args, prefix) => {
 
request.get(`https://www.reddit.com/r/pokememes.json?sort=top&t=day&limit=100`, function(err, res, body) {

  if (err || res.statusCode !== 200) {
    console.error(new Error('Try running the program again.'));
    return callback(err);
} else if (!err || res.statusCode == 200) {

  body = JSON.parse(res.body);
  data = body.data.children;
  var random = Math.floor(Math.random() * Math.floor(data.length));

  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(data[random].data.title)
  .setDescription(data[random].data.selftext)
  message.channel.send(embed)

};

});

}