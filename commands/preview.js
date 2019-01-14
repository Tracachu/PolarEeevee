
const Discord = require("discord.js");
let pokemonData = require("./previewData.json");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;
    
        function ucFirst(wordOne) {

        return wordOne.charAt(0).toUpperCase() + wordOne.slice(1);
    }
    
    /*
            function ucSecond(wordTwo) {

        return wordTwo.charAt(0).toUpperCase() + wordTwo.slice(1);
    }
    
                function ucThird(wordThree) {

        return wordThree.charAt(0).toUpperCase() + wordThree.slice(1);
    }
    */
    


        let p;
    
        if(!args[1]) p = pokemonData[`${ucFirst(args[0])}`][0];
        if((!args[2]) && (args[1])) p = pokemonData[`${ucFirst(args[0])}_${ucSecond(args[1])}`][0];
        if((args[2]) && (args[1]) && (args[0])) p = pokemonData[`${ucFirst(args[0])}_${ucSecond(args[1])}_${ucThird(args[2])}`][0];


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
