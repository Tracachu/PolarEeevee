const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("How about you tell me where the mess is so I can take care of it?");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Hmph. I've cleaned ${args[0]} messages from your channel. Try to be more tidy next time, yeah?`).then(msg => msg.delete(10000));
});

}

module.exports.help = {
  name: "clean"
}
