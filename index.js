const Discord = require("discord.js");
const client = new Discord.Client();
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.send("bot lancer");
});

app.listen(port);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDAxMzc1MTI0MDkzMTQxMDEz.DTpRPA.lq82a1u1emVnxSOXVdqZMxWXcNw');
