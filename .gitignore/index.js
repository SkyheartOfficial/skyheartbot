const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", function(){
    client.user.setGame("Syheart•Bot | " + prefix + "help");
});

client.login("NjA0OTQ2NzQ3MjUyNTM5NDEy.XT17nw.ePADY8zWe0pw94PXuIQeHRxPC9M");
