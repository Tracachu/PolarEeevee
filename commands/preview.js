
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
        .addField("Egg Groups:", p.egg_group, true)
        .setThumbnail(`https://play.pokemonshowdown.com/sprites/xyani/${args.join(" ").toLowerCase()}.gif`)
        .setImage(`https://play.pokemonshowdown.com/sprites/xyani-shiny/${args.join(" ").toLowerCase()}.gif`);
        message.channel.send(embed)

      });
}
