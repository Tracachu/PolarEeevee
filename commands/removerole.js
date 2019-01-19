const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry, but you're not allowed to tamper with roles.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user to fiddle with. Try a flute instead.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Can't do anything if you don't tell me what role I'm snatching.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Yeah uh... that role doesn't exist.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They're already missing that role...");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, you lost the ${gRole.name} role.`)
  }catch(e){
    message.channel.send(`RIP <@${rMember.id}>. They are no longer ${gRole.name}. We tried to keep the announcement private, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "removerole"
}
