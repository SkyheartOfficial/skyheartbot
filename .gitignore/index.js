const Discord = require("Discord.js");

const client = new Discord.Client();

client.on("ready", function(){
    client.user.setGame("Syheart•Bot | " + prefix + "help");
});

client.login("NjA0OTQ2NzQ3MjUyNTM5NDEy.XUFCSQ.bIsQtNp5kkf89088a9vhBQtB2yw");
