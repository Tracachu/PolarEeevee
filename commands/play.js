const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const ytpl = require("ytpl");
const search = require("youtube-search");

module.exports.run = async (bot, message, args) => {

//Get the queue
let server = bot.serverQueues[message.guild.id];

//Check if a song name is used
if(!args.join(" ")) return message.channel.send(`${bot.emojis.get("536599762195972117")} | I need to know what you'd like to listen to!`);

//Check if the user is in a voice channel
if(!message.member.voiceChannel) return message.channel.send(`${bot.emojis.get("536599762195972117")} | Headphones on, buddy! It's time to hop into a voice channel!`);

//Searchstring
let searchString = args.join(" ");

    //Play function
    async function play(connection, message) {

        //Play the song 
         server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: 'audioonly'}));

        //Set the volume 
        server.dispatcher.setVolume(100 / 100);
        server.volume = 100;

        //When the dispatcher ends
        server.dispatcher.on("end", async function() {

            //Once the song has finished shift the song
            if(server.repeat === false) {

            server.queue.shift();
            server.songRequesters.shift();
            server.songNames.shift();

            }

            //If there is another song in the queue
            if(server.queue[0]) {

                //Repeat the function
                play(connection, message);

                //If repeat is on don't execute this code
                if(server.repeat === true) return;

                //Get the ID of the video
                let id = ytdl.getVideoID(server.queue[0]);

                //Send the 'Now Playing' message
                let embed = new Discord.RichEmbed()
                .setColor("BLUE")
                .setTitle(server.songNames[0])
                .setThumbnail(`https://i.pinimg.com/originals/3f/ee/6a/3fee6a65f4e20663baf53234151b84f6.gif`)
                .setURL(server.queue[0])
                .setImage(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`)
                .addField("Requester", server.songRequesters[0])
                message.channel.send(embed)
                
                //Stop other code from running
                return;

            }

            //If there are no songs left
           await connection.disconnect();
           message.channel.send(`${bot.emojis.get("536599762195972117")} | Hey, I'm going to go for now, your queue is empty. Let me know if you want to play something else!`);

        });
    }

//Check if there is any '&s' and split them
if(searchString.includes("https://youtu.be/") || searchString.includes("https://www.youtube.com/") && searchString.includes("&")) searchString = searchString.split("&")[1];

//Check for playlists
if(searchString.includes("list=")) {

    //Get the playlist ID
    let playlistID = searchString.toString().split("list=")[1];

    //If the playlist ID includes a '?'
    if(playlistID.includes("?")) playlistID = playlistID.split("?")[0];

    //If the playlist ID includes a '&t='
    if(playlistID.includes("&t=")) playlistID = playlistID.split("&t=")[0];

        //Get the playlist videos
        ytpl(playlistID, async function(err, playlist) {

            //If there is an error
            if(err) console.log(err) && message.channel.send(`${bot.emojis.get("536599762195972117")} | Sorry but that playlist isn't working right now.`);

            //Push the songs to the queue 
            playlist.items.forEach((song) => {

                //Push to the arrays
             server.queue.push(song.url_simple);
             server.songRequesters.push(message.author.tag);
             server.songNames.push(song.title);                                

            });

            //If the bot isn't playing in a channel
            if(!message.guild.voiceConnection) await message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });

            //Send the embed
            let embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setThumbnail(`https://i.pinimg.com/originals/3f/ee/6a/3fee6a65f4e20663baf53234151b84f6.gif`)
            .setTitle(playlist.title)
            .setURL(playlist.url)
            .setImage(playlist.items[0].thumbnail)
            .addField("Requester", message.author.tag)
            message.channel.send(embed)
            

        });

    }    

    //Music search options
    let opts = {
        maxResults: 1,
        key: 'AIzaSyChV72AqgUOWab694WT3zdK6EIbY0EGRuc'
    }

    search(searchString, opts, async function(err, results) {

        //If there is an error
        if(err) return message.channel.send(`${bot.emojis.get("536599762195972117")} | Sorry! There was an error getting that song.`) && console.log(err);

        //Push to the arrays
        server.queue.push(results[0].link);
        server.songNames.push(results[0].title);
        server.songRequesters.push(message.author.tag);

        //If the bot isn't playing in a channel
        if(!message.guild.voiceConnection) await message.member.voiceChannel.join().then(function(connection) {
            play(connection, message);
        });

        //Send the added to queue message
        let embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle(results[0].title)
        .setURL(results[0].link)
        .setThumbnail(`https://i.pinimg.com/originals/3f/ee/6a/3fee6a65f4e20663baf53234151b84f6.gif`)
        .setImage(`https://img.youtube.com/vi/${results[0].id}/maxresdefault.jpg`)
        .addField("Requester", message.author.tag)
        message.channel.send(embed);

    });

};
