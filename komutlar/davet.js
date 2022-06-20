const Discord = require(`discord.js`)

exports.run = async(client, message)=> {

    const embed = new Discord.MessageEmbed()
    .setDescription("Davet linkleri  ")
    .addField("» **Botun Sahibi**", "<@!840158550495723530>| ꧁༒☬M̷O̷N̷S̷T̷E̷R̷☬༒꧂#0690 ")
    .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/r669YYB8nZ)", )
    .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=969829299601412156&scope=bot&permissions=8)", )
    .setTimestamp()
    .setColor("BLUE")
    message.channel.send(embed)
}

exports.conf = {
  aliases: ['davet'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'davet',
  description: 'Botu kendi sunucunuza davet edersiniz',
  usage: 'davet'
  
  }