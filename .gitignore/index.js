const Discord = require("Discord.js");

const client = new Discord.Client();

client.on("ready", function(){
    client.user.setGame("Syheart•Bot | " + prefix + "help");
});

client.login("5_31Pb0QByzHv9ChI4cZgrafBKlBeS5Q");
