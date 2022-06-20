const Discord = require(`discord.js`)

exports.run = async(client, message)=> {

    const embed = new Discord.MessageEmbed()
    .setDescription("Tabiki ꧁༒☬M̷O̷N̷S̷T̷E̷R̷☬༒꧂#0690")
    .setTimestamp()
    .setColor("BLUE")
    message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["zaman","vakit"],
    permLevel: 0
}

exports.conf = {
  aliases: ['sahipinkim', 'zaman'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'sahipinkim',
  description: 'Sahipi yazar',
  usage: 'sahipinkim'
};

