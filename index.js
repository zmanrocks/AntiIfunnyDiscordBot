const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("Ayyyyy lmao!");
});

bot.login(botconfig.token);

 if (message.channel.id === '467888194713681932'){

   if(message.content.includes("ifunny")){
     message.delete()
     message.send('Shut the fuck up you fucking normie')
   }
 }
