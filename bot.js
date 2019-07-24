const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603591365233999872")
setInterval(function() {
channel.send(`Khaled ga7d`);
}, 30)
})

client.login(process.env.BOT_TOKEN);