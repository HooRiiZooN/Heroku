const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("in Starbucks owo");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice[1];


if(cmd === `${prefix}serverinfo`){

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Information")
  .setColor("#130015")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);
  message.channel.send(serverembed);

}



  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed(true)
    .setAuthor("SupportBot")
    .setDescription("Bot Information")
    .setColor("#130015")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Developers", "Niels#0001, Joeyy#3118")
    .setFooter("Why are you even looking at this");

    message.channel.send(botembed);

  }

})

bot.login(botconfig.token);
