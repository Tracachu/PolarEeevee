const Discord = require("discord.js");
const fs = require("fs");
const music = require('telk-music');
let bot = new Discord.Client();

let settings = require("./settings.json");

let prefix = settings.prefix;
let ownerID = settings.ownerID;

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
    if(!message.content.startsWith(prefix)) return;

    try {

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, message, args, prefix);

    } catch (e) {
        //console.log(e.stack); // Use this if thereis a error you cant solve
        return
    }
});

bot.login(settings.BOT_TOKEN);
