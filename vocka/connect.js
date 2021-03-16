const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid
} = require("@adiwajshing/baileys");
const qrImg = require('qr-image');
const fs = require('fs');
const clc = require('chalk');

//==================================================°
const conn = new WAConnection() 

exports.Whatsapp = conn

exports.connectToWhatsApp =  async() =>{
  conn.on('qr', qr => {
     var qr_svg = qrImg.image(qr, { type: 'png' });
      qr_svg.pipe(require('fs').createWriteStream('qr.png'));
      var svg_string = qrImg.imageSync(qr, { type: 'png' });
  console.log('PLEASE SCAN the QR CODE by Vocka')
  });
    
  conn.on('credentials-updated', () => {
  console.log(`credentials updated!`)
  const authInfo = conn.base64EncodedAuthInfo() 
  fs.writeFileSync('session.json', JSON.stringify(authInfo, null, '\t')) 
   })
  fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
  await conn.connect()
  console.log(clc.yellow(' ===================================================='))
  console.log(clc.green("│ +  WA Version: "+conn.user.phone.wa_version))
  console.log(clc.green("│ +  OS Version: "+conn.user.phone.os_version))
  console.log(clc.green("│ +  Device: "+conn.user.phone.device_manufacturer))
  console.log(clc.green("│ +  Model: "+conn.user.phone.device_model))
  console.log(clc.green("│ +  OS Build Number: "+conn.user.phone.os_build_number))
  console.log(clc.yellow(' ===================================================='))
  console.log(clc.green(' ===================================================='))
  console.log(clc.red('│ + Github : https://github.com/ground67/SelfWA      │'))
  console.log(clc.yellow('│ + Whatsapp : https://wa.me/62895606805040           │ '))
  console.log(clc.green(' ===================================================='))
  return conn
}