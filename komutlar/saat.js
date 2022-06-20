const Discord = require(`discord.js`)

exports.run = async(client, message)=> {

    const embed = new Discord.MessageEmbed()
    .setDescription("Saat Aşağıda Yazmaktadır")
    .setTimestamp()
    .setColor("BLUE")
    message.channel.send(embed)
}

exports.conf = {
  aliases: ['saat', 'zaman'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'saat',
  description: 'Saatı size yazar',
  usage: 'saat'
};
