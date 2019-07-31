const Discord = require("Discord.js");

var client = new Discord.Client();

client.on("ready", () =>{
    client.user.setGame("Syheart•Bot | " + prefix + "help")
});

client.login("NjA0OTQ2NzQ3MjUyNTM5NDEy.XUFn0A.O1ZsqdC5Oq54a8FbRVF0ImZjzAo");
