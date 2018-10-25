
const Discord = require("discord.js");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('0be0b411716b4948bd5d71c6336173b0');

exports.run = async (bot, message, args, prefix) => {

    if(message.author.bot) return;


    newsapi.v2.topHeadlines({
        q: args.join(" "),
        language: 'en'
      }).then(response => {
        
        let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setImage(response.articles[0].urlToImage)
        .setTitle(`Result: ${response.articles[0].title} by ${response.articles[0].author}`)
        .addField("Description:", response.articles[0].description)
        .addField("Published at:", response.articles[0].publishedAt)
        .setURL(response.articles[0].url)
        message.channel.send(embed)
      }).catch(err => {
          if(err) return message.channel.send("🚫 | Sorry! We couldn\'t find the news!")
      });
        
    }
