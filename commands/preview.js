
const Discord = require("discord.js");
let pokemonData = require("previewData.json");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

    function capitalLetters(wordOne, wordTwo) {

        return wordOne.charAt(0).toUpperCase() + args[0].slice(1) && wordTwo.charAt(0).toUpperCase() + args[1].slice(1);
    }


        let p = pokemonData[capitalLetters(args[0], args[1])][0];


        let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle(`Pokedex results for ` + `\`\`\`${ucFirst(args.join(" "))}\`\`\``)
        .addField("National Dex Number:", p.National_dex, true)
        .addField("Primary Type:", p.primary_type, true)
        .addField("Secondary Type:", p.secondary_type, true)
        .addField("Rarity:", p.rarity, true)
        .addField("Classification:", p.Classification, true)
        .addField("Evolves by:", p.evolves_by, true)
        .addField("Evolves into:", p.evolves_into, true)
        .setThumbnail(`https://play.pokemonshowdown.com/sprites/xyani/${args.join(" ").toLowerCase()}.gif`)
        .setImage(`https://play.pokemonshowdown.com/sprites/xyani-shiny/${args.join(" ").toLowerCase()}.gif`);
        message.channel.send(embed)

}
