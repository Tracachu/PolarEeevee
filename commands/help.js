const Discord = require("discord.js");

exports.run = (bot, message, args, prefix) => {

    if(message.author.bot) return;

            let Embed1 = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Fun")
            .addField(`${prefix}ping`, `Responds back with my heartbeat!`)
            .addField(`${prefix}8ball (Question)`, `Answers your question with an 8ball.`)
            .addField(`${prefix}dice (Sides)`, `Rolls a dice with the same side that you provided the sides can be any number.`)
            .addField(`${prefix}gif (Tag)`, "Searches for a gif with the tag you supplied. This command will only work in an NSFW channel no DM's or SFW channels.")
            .addField(`${prefix}cat`, `Sends a cat gif`)
            .addField(`${prefix}dog`, "Sends a dog gif")
            .addField(`${prefix}overwatch (Username replace the # with -) (Platform pc | xbl | psn) (Region global | cn | kr | eu | us)`, "Gets the overwatch stats of the overwatch player you provided")
            .addField(`${prefix}fortnite (Username) (Platform | xb1 | psn | pc)`, `Sends you the information of the Fortnite user you provided`)
            message.author.send(Embed1);   

            let Embed2 = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Utility")
            .addField(`${prefix}calculate (Equation)`, `Solves the equation you gave Polar. It works as a Scientific Calculator too`)
            .addField(`${prefix}weather (Location)`, "Gets the current weather infomation for the location you provided, in Fahrenheit.")
            .addField(`${prefix}news (Subject)`, `Sends the latest news on the subject you chose`)
            message.author.send(Embed2)
        

            let Embed3 = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Pokémon")
            .addField(`${prefix}preview (Pokémon)`, "Gets the smol Pokécord-relevant infomation of the Pokémon you provided.")
            .addField(`${prefix}pokedex (Pokémon)`, "Gets the Pokédex information of the Pokémon you provided.")
            .addField(`~~pokémon~~`, "(WIP) Brings the gif/sprite of the stated Pokémon when the Pokémon is written in strikethrough (double ~'s around the word). Currently only works for italics.")
            message.author.send(Embed3)
        

            let Embed4 = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Misc")
            .addField("Make a channel called `bot-hell` for join messages from Polar", "-=-=-=-=-")
            message.author.send(Embed4)
        
            let Embed5 = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Moderation")
            .addField(`${prefix}ban (@mention)`, `Bans the mentioned user. channel named **incidents** and Ban Members permission will be needed!`)
            .addField(`${prefix}kick (@mention)`, `Kicks the mentioned user. channel named **incidents** and Kick Members permission will be needed!`)
            .addField(`${prefix}mute (@mention)`, `Mutes the selected user. Requires "Mute Members" permision.`)
            .addField(`${prefix}unmute (@mention)`, `Unmutes the selected user. Requires "Mute Members" permision.`)
            .addField(`${prefix}prune OR clean #`, "Bulk deletes 1-100 messages at a time.") 
            .addField(`${prefix}addrole (@mention)`, "Adds the stated role to the mentioned user." )
            .addField(`${prefix}removerole (@mention)`, "Removes the stated role from the mentioned users.")
            .addField(`${prefix}`,)
            message.author.send(Embed5)

            let Embed6 = new Discord.RichEmbed()
            .setTitle("Music")
            .setColor("BLUE")
            .addField(`${prefix}play (Song)`, "Searches and plays the song you requested")
            .addField(`${prefix}skip`, `Skips from the current song to the next one in the queue.`)
            .addField(`${prefix}queue`, `Shows you the queue of your server`)
            .addField(`${prefix}pause`, `Pauses the playing song`)
            .addField(`${prefix}resume`, `Resumes the paused song`)
            .addField(`${prefix}volume [1-200]`, `Adjusts the volume`)
            .addField(`${prefix}leave`, `Clears the queue and leaves the voice channel`)
            .addField(`${prefix}stop`, `Stops the music from playing`)
            .addField(`${prefix}repeat`, `Turns repeat on or off for your server`)
            .addField(`${prefix}np`, `Tells you what is now playing`)
            .addField(`${prefix}lyrics (Artist - Song)`, `Gets the lyrics for the playing song. Retrieves them from azlyrics.com and sends them in embeds. Be sure to omit any dashes in the actual song title.`)
            message.author.send(Embed6)

        

    


}
