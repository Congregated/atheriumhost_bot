const Discord = require("discord.js");
const TOKEN = "NDA5MDk0ODY2OTc1NDU3MzAx.DVZnWw.qmR5SxVU0Nix8PuuZ0URDRpa_HE";
const prefix = "!"
const bot = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
    let guild = member.guild;
    let joinRole = guild.roles.find('name', 'Member');

    member.addRole(joinRole);

    if (member.guild.id == '393206821277401099' ) member.guild.channels.find('name', 'welcome').sendMessage(`Welcome ${member}, to **AtheriumHost**!`);
});

bot.on("ready", function() {
    bot.user.setGame("AtheriumHost | 1.75$ Hosting")
    console.log("The bot is now on!");
});

bot.on('message', function(message){
    if (message.content == "!restart"){
        message.channel.send("Restarting...").then(function(){
            process.exit(1)
        })
    };
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {       
        case "help":
        const embed = new Discord.RichEmbed()

        .setTitle('AtheriumBot Help Message')
        .addField("Bot Commands »","**!help** - PM's the Help Message\n**!ticket** - Creates a new ticket\n**!close** - closes open ticket\n**!website** - PM's Website link")
        .addField("Coming Soon »","Anti Grief")
        .setFooter('Verion 1.0 | Created by ℭ𝔬𝔫𝔤𝔯𝔢𝔤𝔞𝔱𝔢𝔡#9405')
        .setColor(0x1D82B6)
        
        .setThumbnail('https://images.apester.com/user-images%2F23%2F23453abe44ab5d6b4ca98235c4fe2e8e.jpg/600/undefined/undefined')
        message.author.send(embed);
                message.channel.send({embed:{ 
                   
                 color: 0x1D82B6,
                 description: `📧 | **Help Message Send in DM's**`
                }
            });
        };
    });

        bot.on("message", function(message) {
                if (message.author.equals(bot.user)) return;
            
                if(!message.content.startsWith(prefix)) return;
                
                var args = message.content.substring(prefix.length).split(" ");
            
                switch (args[0].toLowerCase()) {   
            case "website":
            const embed = new Discord.RichEmbed()

            .setTitle('Website Link')
            .setDescription('http://atheriumhost.com')
            .setColor(0x1D82B6)

            message.channel.send(embed);
        };
    });

bot.on("message", function(message) {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" "); 
    let args = cont.slice(1);

    if (msg.startsWith(prefix + 'CLEAR')) {

        async function clear() {
            message.delete();
    
            if (isNaN(args[0])) {
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'clear <amount>');
                return;
            }
    
            const fetched = await message.channel.fetchMessages({limit: args[0]});
                    var embed = new Discord.RichEmbed()
            .addField("Messages Cleared", fetched.size)
            .setColor(0x800080)
                message.channel.sendEmbed(embed);
    
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));
    
        }
    
        clear();
    
    };
});

bot.on("channelCreate", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"New Channel Created", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("channelDelete", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Channel got Deleted", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("channelPinsUpdate", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Channel Pins Edited", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("channelUpdate", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"The channel got updated", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("guildBanAdd", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Member got Banned", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("guildBanRemove", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Member got Unbanned", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("guildCreate", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Discord Server Created", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("guildDelete", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Discord Server Deleted", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("guildMemberAdd", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Added member to Discord Server", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("guildMemberRemove", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Kicked Member", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("guildMemberUpdate", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Role or Nickname change ", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("guildUnavailable", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Server is Unavailabe", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("guildUpdate", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Server Update", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("messageDelete", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Message got Deleted", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("messageDeleteBulk", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Messages got Deleted by Bulk", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("messageReactionAdd", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Message got Reacted to", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("messageReactionRemove", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"Message Reaction Removed", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("messageReactionRemoveAll", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"All reactions Removed from Message", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("roleCreate", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"A Role was Created", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("roleDelete", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"A Role got Deleted", description:`ID: ${message.id} <#${message.id}>`}})
});

bot.on("roleUpdate", function(message) {
    console.log(message)
    message.guild.channels.find('name', 'logs').send({embed:{title:"A Role got Updated", description:`ID: ${message.id} <#${message.id}>`}})
});

    bot.login(TOKEN);
