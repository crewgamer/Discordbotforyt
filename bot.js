const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = ("!")
client.login(client.login(process.env.BOT_TOKEN))
client.on("ready", function() {
  console.log("Ready as: Testingbot3k")
})

client.on("message", function(msg) {
  if(msg.content.startsWith  (prefix + "setgame")) {
    if(msg.author.id !==  "267668745193783296") {
      msg.channel.send(":x: Bot Owner Only Sorry Bot owners only " +  msg.author)
      return;
    }
    msg.channel.send("Your Message was set :white_check_mark: " + msg.author )
let ARGUMENTS = msg.content.split(` `).slice(1);
let GAMEARGS = ARGUMENTS.join(` `)
console.log(game)
client.user.setGame(GANEARGUMENTS)
}
})

client.on("message", function(msg) {
  if(msg.content.startsWith  (prefix + "echo")) {
    if(msg.author.id !==  "267668745193783296") {
      msg.channel.send(":x: Bot Owner Only Sorry Bot owners only " +  msg.author)
      return;
    }
let ARGUMENTS = msg.content.split(` `).slice(1);
let WORDSTOECHO = ARGUMENTS.join(` `)
msg.channel.send(WORDSTOECHO)
}
})


client.on("message", function(msg) {
if(msg.content.startsWith (prefix + "sendto")) {
//msg.guild.member(msg.mentions.members.first()).removeRole('371698466436677642').catch(error => console.log(error));
msg.channel.send("Dmed " + msg.mentions.members.first() +  " :white_check_mark:  "  + msg.author)
let ARGUMENTS = msg.content.split(` `).slice(1);
let MESSAGEINNERS = ARGUMENTS.join(` `)
msg.mentions.members.first().sendMessage(MESSAGEINNERS)
//client.channels.get('371699391431704587').sendMessage('User Unwhitelisted by ' + msg.author)
}
})
