
const Discord = require("discord.js");
oakdexPokedex = require("oakdex-pokedex");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    function ucFirst(string) 
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    

   

    oakdexPokedex.findPokemon(ucFirst(args.join(" ")), function(p) {

        let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle(`Pokedex results for ` + `\`\`\`${ucFirst(args.join(" "))}\`\`\``)
        .addField("Types:", p.types, true)
        .addField("Height (M):", p.height_eu, true)
        .addField("Weight (kg):", p.weight_eu, true)
        .addField("Catch Rate:", p.catch_rate, true)
        .addField("Leveling rate:", p.leveling_rate, true)
        .setThumbnail(`http://www.pokestadium.com/sprites/xy/${args.join(" ").toLowerCase()}.gif`)
        message.channel.send(embed)

      });
}