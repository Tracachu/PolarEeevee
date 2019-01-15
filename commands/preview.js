
const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

   //Constants 
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    if(!args.join(" ")) return message.channel.send(":no_entry_sign: | Please specify a pokemon name.");

 const poke = require("../previewData.json");
 let p = poke[`${args.join("_").toLowerCase()}`][0];

 if(message.content.includes("Mega")) {

    let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle(`Pokedex results for ` + `\`\`\`${args.join(" ")}\`\`\``)
    .addField("National Dex Number:", p.National_Dex || "N/A", true)
    .addField("Primary Type:", p.Primary_Type || "N/A", true) 
    .addField("Rarity:", p.Rarity || "N/A", true) 
    .addField("Secondary Type:", p.Secondary_Type || "N/A", true) 
    .addField("Classification:", p.Classification || "N/A", true) 
    .addField("Evolves by:", p.Evolves_by || "N/A", true) 
    .addField("Evolves into:", p.Evolves_Into || "N/A", true) 
   message.channel.send(embed);

    return;

 }

 let embed = new Discord.RichEmbed()
 .setColor("BLUE")
 .setTitle(`Pokedex results for ` + `\`\`\`${args.join(" ")}\`\`\``)
 .addField("National Dex Number:", p.National_Dex || "N/A", true)
 .addField("Primary Type:", p.Primary_Type || "N/A", true) 
 .addField("Rarity:", p.Rarity || "N/A", true) 
 .addField("Secondary Type:", p.Secondary_Type || "N/A", true) 
 .addField("Classification:", p.Classification || "N/A", true) 
 .addField("Evolves by:", p.Evolves_by || "N/A", true) 
 .addField("Evolves into:", p.Evolves_Into || "N/A", true) 
 .setThumbnail(`https://play.pokemonshowdown.com/sprites/xyani/${args.join(" ").toLowerCase()}.gif`)
 .setImage(`https://play.pokemonshowdown.com/sprites/xyani-shiny/${args.join(" ").toLowerCase()}.gif`)
message.channel.send(embed);

};

}
