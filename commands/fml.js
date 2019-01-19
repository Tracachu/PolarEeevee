//Constants 
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

//Get and send the random FML
require("randomfmylife")().then(fml => {

    //Send the FML
    let embed = new Discord.RichEmbed()
    .setColor(bot.embedColor)
    .setTitle("Fuck My Life")
    .setDescription(fml)
    .setThumbnail("http://is2.mzstatic.com/image/thumb/Purple71/v4/a4/21/8b/a4218b42-a655-e449-d428-2c47b8ea72aa/source/175x175bb.jpg")
    message.channel.send(embed);
    
});

};