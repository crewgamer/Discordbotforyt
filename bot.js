const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = ("!")
var args = (proccess.env.ARGUMENTS)
var wordstoecho = (process.env.WORDSTOECHO)
var game = (proccess.env.GAMEARGS)
client.login(client.login(process.env.BOT_TOKEN))
client.on("ready", function() {
  console.log("Ready as: Testingbot3k")
})

client.on("message", function(msg) {
  if(msg.content.startsWith  (prefix + "setgame")) {
    if(msg.author.id !==  "370703952490135552") {
      msg.channel.send(":x: Bot Owner Only Sorry Bot owners only " +  msg.author)
      return;
    }
    msg.channel.send("Your Message was set :white_check_mark: " + msg.author )
let args = msg.content.split(` `).slice(1);
let game = args.join(` `)
console.log(game)
client.user.setGame(game)
}
})

client.on("message", function(msg) {
  if(msg.content.startsWith  (prefix + "echo")) {
    if(msg.author.id !==  "370703952490135552") {
      msg.channel.send(":x: Bot Owner Only Sorry Bot owners only " +  msg.author)
      return;
    }
let args = msg.content.split(` `).slice(1);
let wordstoecho = args.join(` `)
console.log(`${msg.author.tag} made the bot say ` + wordstoecho)
msg.channel.send(wordstoecho)
}
})


client.on("message", function(msg) {
if(msg.content.startsWith (prefix + "sendto")) {
//msg.guild.member(msg.mentions.members.first()).removeRole('371698466436677642').catch(error => console.log(error));
msg.channel.send("Dmed " + msg.mentions.members.first() +  " :white_check_mark:  "  + msg.author)
let args = msg.content.split(` `).slice(1);
let Messageinners = args.join(` `)
msg.mentions.members.first().sendMessage(Messageinners)
console.log(`${msg.author.tag} sent a message to ` + msg.mentions.members.first()  + " saying   " + Messageinners)
//client.channels.get('371699391431704587').sendMessage('User Unwhitelisted by ' + msg.author)
}
})

client.on("message", function(msg) {
 if(msg.content === prefix + "ping") {
    msg.channel.send(`Pinging...`).then(function(m){
      m.edit(`Pong! took ${m.createdTimestamp - msg.createdTimestamp} ms`)
    })23
   }

})
