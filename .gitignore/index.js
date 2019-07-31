//===================================================================================================================================//
//===================================================================================================================================//
//=========|  * * *     * * *        * *           * * *      * * *        * *      * *     * *   * *     * *   * * * *    |=========//
//=========|  *    *    *    *    *       *      *            *    *      *   *     *  *   *  *   *  *   *  *   *          |=========//
//=========|  * * *     * * *    *         *    *   * * *     * * *      * * * *    *    *    *   *    *    *   * *        |=========//
//=========|  *         *  *      *       *      *       *    *  *      *       *   *         *   *         *   *          |=========//
//=========|  *         *    *       * *           * * *      *    *   *         *  *         *   *         *   * * * *    |=========//
//=========|                                                                                                               |=========//
//=========| * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * |=========//
//===================================================================================================================================//
//===================================================================================================================================//













//===SET DES CONSTANTES ET VARIABLES===//

require("events").EventEmitter.defaultMaxListeners = 25;
const Discord = require("discord.js");
var client = new Discord.Client();
var prefix = "!";
var moderation = "0";
var bienvenue = "0";

client.login("NjA0OTQ2NzQ3MjUyNTM5NDEy.XUFohg.bbNCI7vJNeCSfjG_FsVPLqjEdRQ");

client.on("ready", () =>{
    client.user.setGame("Skyheart•Bot | " + prefix + "help")
});









//===POUR ACTIVER LES DIFFERENTES OPTIONS===//

//Activer le welcome
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "active welcome"){
        message.delete()
        bienvenue = 1
        let activebienvenueEmbed = new Discord.RichEmbed()
            .setColor("#12ff00")
            .setTitle(":white_check_mark:")
            .addField("Vous venez d'activez la fonction de Bienvenue ! Pour la désactivez tapez ```" + prefix + "desactive welcome```", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(activebienvenueEmbed)
    }
});

//Désactivez le welcome
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "desactive welcome"){
        message.delete()
        bienvenue = 0
        let desactivebienvenueEmbed = new Discord.RichEmbed()
            .setColor("#ff0e0e")
            .setTitle(":x:")
            .addField("Vous venez de désactivez la fonction de Bienvenue ! Pour l'activez tapez ```" + prefix + "active welcome```", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(desactivebienvenueEmbed)
    }
});

//Activez la modération
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "active moderation"){
        message.delete()
        moderation = 1
        let activemoderationEmbed = new Discord.RichEmbed()
            .setColor("#12ff00")
            .setTitle(":white_check_mark:")
            .addField("Vous venez d'activez la fonction de Modération ! Pour la désactivez tapez ```" + prefix + "desactive moderation```", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(activemoderationEmbed)
    }
});

//Désactivez la modération
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "desactive moderation"){
        message.delete()
        moderation = 0
        let desactivemoderationEmbed = new Discord.RichEmbed()
            .setColor("#ff0e0e")
            .setTitle(":x:")
            .addField("Vous venez de désactivez la fonction de Modération ! Pour l'activez tapez ```" + prefix + "active moderation```", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(desactivemoderationEmbed)
    }
});
















//===BONJOUR ET AU REVOIR===//

//Bonjour
client.on("guildMemberAdd", user =>{
    if(bienvenue === 0) return
    if(bienvenue === 1){
        let JoinEmbed = new Discord.RichEmbed()
            .setColor("#12ff00")
            .setAuthor(user.user.username)
            .setThumbnail(user.user.displayAvatarURL)
            .setDescription(":inbox_tray: Bonjour et bienvenue à toi " + user + " dans le serveur **" + user.guild.name + "** ! :tada: :hugging:")
            .setTimestamp()
            .setFooter(user.guild.name + " | Skyheart•Bot")
        user.guild.channels.get("605108448933314562").send(JoinEmbed)
    }
});

//Au revoir
client.on("guildMemberRemove", user =>{
    if(bienvenue === 0) return
    if(bienvenue === 1){
        let LeaveEmbed = new Discord.RichEmbed()
            .setColor("#ff0e0e")
            .setAuthor(user.user.username)
            .setThumbnail(user.user.displayAvatarURL)
            .setDescription(":outbox_tray: " + user + " nous a quitter ! Bonne continuation à lui ! :slight_frown:")
            .setTimestamp()
            .setFooter(user.guild.name + " | Skyheart•Bot")
        user.guild.channels.get("605108448933314562").send(LeaveEmbed)
    } 
});

















//===TEST COMMANDES SIMPLES===//

//Rien à dire
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "je vais manger"){
        message.channel.send("Bonne appétit " + message.author + " !")
    }
});
















//Pour les prefix//

//Proposition des actions
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "settings prefix"){
        message.delete()
        let PrefixEmbed = new Discord.RichEmbed()
            .setColor("#ff0e0e")
            .setTitle(":x:")
            .addField("Veuilez faire ```" + prefix + "settings prefix``` suivi de ```- / -- / _ / ! / ? / ^^```", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(PrefixEmbed)
    }
});

//Avec le -
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "settings prefix -"){
        message.delete()
        prefix = "-"
        let Prefix1Embed = new Discord.RichEmbed()
            .setColor("#12ff00")
            .setTitle(":white_check_mark:")
            .addField("Super, votre nouveau prefix est bien `" + prefix + "` !", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(Prefix1Embed)
    }
});

//Avec le --
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "settings prefix --"){
        message.delete()
        prefix = "--"
        let Prefix2Embed = new Discord.RichEmbed()
            .setColor("#12ff00")
            .setTitle(":white_check_mark:")
            .addField("Super, votre nouveau prefix est bien `" + prefix + "` !", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(Prefix2Embed)
    }
});

//Avec le _
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "settings prefix _"){
        message.delete()
        prefix = "_"
        let Prefix3Embed = new Discord.RichEmbed()
            .setColor("#12ff00")
            .setTitle(":white_check_mark:")
            .addField("Super, votre nouveau prefix est bien `" + prefix + "` !", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(Prefix3Embed)
    }
});

//Avec le !
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "settings prefix !"){
        message.delete()
        prefix = "!"
        let Prefix4Embed = new Discord.RichEmbed()
            .setColor("#12ff00")
            .setTitle(":white_check_mark:")
            .addField("Super, votre nouveau prefix est bien `" + prefix + "` !", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(Prefix4Embed)
    }
});

//Avec le ?
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "settings prefix ?"){
        message.delete()
        prefix = "?"
        let Prefix5Embed = new Discord.RichEmbed()
            .setColor("#12ff00")
            .setTitle(":white_check_mark:")
            .addField("Super, votre nouveau prefix est bien `" + prefix + " !", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(Prefix5Embed)
    }
});

//Avec le ^^
client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "settings prefix ^^"){
        message.delete()
        prefix = "^^"
        let Prefix6Embed = new Discord.RichEmbed()
            .setColor("#12ff00")
            .setTitle(":white_check_mark:")
            .addField("Super, votre nouveau prefix est bien `" + prefix + "` !", "Si vous avez un problème tapez `" + prefix + "help`")
            .setTimestamp()
            .setFooter("Skyheart•Bot")
        message.channel.send(Prefix6Embed)
    }
});














//===POUR LE CLEAR===//

//Le clear
client.on("message", message =>{
    if(moderation === 1){
        if(!message.guild) return
        let args = message.content.trim().split(/ +/g) 
        if(args[0].toLowerCase() === prefix + "clear"){
            let permissionEmbed = new Discord.RichEmbed()
                .setColor("#ff0e0e")
                .setTitle(":x:")
                .addField("Vous n'avez pas les permissions pour utilisez cette commande !", "Si vous avez un problème tapez `" + prefix + "help`")
                .setTimestamp()
                .setFooter("Skyheart•Bot")
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(permissionEmbed)
            let count = parseInt(args[1])
            let nombreasupprEmbed = new Discord.RichEmbed()
                .setColor("#ff0e0e")
                .setTitle(":x:")
                .addField("Veuilez indiquer un nombre ! Ex : ```" + prefix + "clear 10```", "Si vous avez un problème tapez `" + prefix + "help`")
                .setTimestamp()
                .setFooter("Skyheart•Bot")
            if(!count) return message.channel.send(nombreasupprEmbed)
            let nombrevalideEmbed = new Discord.RichEmbed()
                .setColor("#ff0e0e")
                .setTitle(":x:")
                .addField("Veuillez indiquer un nombre valide !", "Si vous avez un problème tapez `" + prefix + "help`")
                .setTimestamp()
                .setFooter("Skyheart•Bot")
            if(isNaN(count)) return message.channel.send(nombrevalideEmbed)
            let nombreentreEmbed = new Discord.RichEmbed()
                .setColor("#ff0e0e")
                .setTitle(":x:")
                .addField("Veuillez indiquer un nombre entre 1 et 100 !", "Si vous avez un problème tapez `" + prefix + "help`")
                .setTimestamp()
                .setFooter("Skyheart•Bot")
            if(count < 1 || count > 100) return message.channel.send(nombreentreEmbed)
            message.channel.bulkDelete(count + 1, true)
            let validesupprEmbed = new Discord.RichEmbed()
                .setColor("#12ff00")
                .setTitle(":white_check_mark:")
                .addField("Vous avez supprimer " + count + " messages", "Si vous avez un problème tapez `" + prefix + "help`")
                .setFooter("Skyheart•Bot")
            message.channel.send(validesupprEmbed)
            message.channel.bulkDelete(1, true)
        }
    }
});

