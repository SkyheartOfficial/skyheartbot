const Discord = require("Discord.js");

const client = new Discord.Client();

client.on("ready", function(){
    client.user.setGame("Syheart•Bot | " + prefix + "help");
});

client.login("NjA0OTQ2NzQ3MjUyNTM5NDEy.XUFnVw.4WtQwzaFUrw2ujKXV8G3XfVkyF0");
