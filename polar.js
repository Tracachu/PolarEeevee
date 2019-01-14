const Discord = require("discord.js");
const fs = require("fs");
const music = require('telk-music');
const cleverbot = require("cleverbot.io");
let bot = new Discord.Client();

let settings = require("./settings.json");

let prefix = settings.prefix;
let ownerID = settings.ownerID;
let clever = new cleverbot("GS6xN3FmOdX3aAmg", "gigAgcYDhxvpl3mRkcm9bGIT28Z00pZO");

music(bot, {
    apikey: 'AIzaSyChV72AqgUOWab694WT3zdK6EIbY0EGRuc', //dont show this to anyone!
      prefix: '&',
      global: false,
      maxQueueSize: 100,
      deletemsg: false
  });

bot.on("guildMemberAdd",  member => {
 const wc = [
    `Welcome ${member.user.username} to ${member.guild.name}. :tada:`,
    `Roses are Red, Violets are Blue, ${member.user.username} has come to play with you. :basketball_player:`,
    `${member.user.username} has joined. We're all crazy here. :eyes:`,
    `Is it a bird? Is it a Plane? NO! It\'s ${member.user.username}. :airplane:`,
    `Alright! ${member.user.username} has joined the party! :tada:`,
    `${member.user.username} joined. We don\'t bite... Or do we. :eyes:`,
    `${member.user.username} has joined. THIS IS SPARTA!`,
    `Apagando las luces! ${member.user.username} has come to turn of the lights.`
  ]  
 var result = Math.floor((Math.random() * wc.length) + 0);
  let chan = member.guild.channels.find(c => c.name == "bot-hell");
let embed = new Discord.RichEmbed()
.setTitle(wc[result])
.setColor("BLUE")
.setThumbnail(member.user.displayAvatarURL)
chan.send(embed)
});

bot.on("ready", async () => {
bot.user.setPresence({ game: { name: `in over ${bot.guilds.size} servers | p!help for help`, url: 'https://twitch.tv/monstercat', type: 1 } });
console.log(`-=-=-=-=-=${bot.user.tag}=-=-=-=-=-`)
console.log(`Prefix: ${prefix}`)
console.log(`OwnerID: ${ownerID}`)
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
})

bot.on("message", message => {

    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;   
    
          //Initialize Cleverbot
      clever.setNick("PlarEeveeBot");
      clever.create(function (err, session) {
          
          if(err) return console.log(err);
  
      //Cleverbot
      if(message.content.startsWith(bot.user.toString())) {
  
              //The question
              let askArgs = message.content.slice(22).trim().split(" ");
  
              //Start typing
              message.channel.startTyping();
  
              //Ask the bot
              clever.ask(askArgs.join(" "), function (err, response) { 
                  //If there is an error
                  if(err) console.log(err);
  
                  //Respond
                  let embed = new Discord.RichEmbed()
                  .setColor("BLUE")
                  .setTitle(`${bot.user.username}`)
                  .setThumbnail(bot.user.displayAvatarURL)
                  .setDescription(`**${response}**`)
                  message.channel.send(embed)
  
                  //Stop typing
                  message.channel.stopTyping();
              });
          }
      });

    
    if(!message.content.startsWith(prefix)) return;

    try {

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, message, args, prefix);

    } catch (e) {
        console.log(e.stack); // Use this if thereis a error you cant solve
        //return
    }
});

bot.login(process.env.BOT_TOKEN);
