const Discord = require('discord.js')
exports.run = function(client, message, args) {

   function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Bu komudu kullanmak için `Rol Yönet` yetkisine sahip olmalısın.")
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send("Bir rol etiketlemelisin.")
message.guild.members.cache.forEach(async member => {
 if(!member.roles.cache.has(rol.id)){
   member.roles.add(rol.id)
   sleep(5000)
 }
})
message.channel.send("İşlem başlatıldı. Herkese rol verilmesi fazla sürebilir.")
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'toplurolver',

  description: 'description',

  usage: 'usage'

};