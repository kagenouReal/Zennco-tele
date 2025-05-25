//========KAGENOU========
require("./config");
const fs = require("fs-extra");
const { addPremiumUser, delPremiumUser, setPublic, isPublic } = require("./lib/premiun");
//====================
module.exports = async (m, bot, zyn) => {
try {
const body = m.body || '';
const prefix = global.prefix.find(p => body.startsWith(p)) || '';
if (!prefix) return;
const args = body.slice(prefix.length).trim().split(/ +/).slice(1);
const command = body.slice(prefix.length).trim().split(/ +/)[0].toLowerCase();
const text = args.join(" "); 
//====================
const data = JSON.parse(fs.readFileSync("./system/database/premium.json"));
const premuser = data.premium || [];
const isAccess = [global.owner,...premuser.map(u => u.id.replace(/\D/g, ""))].includes(m.sender);
//====================
const isBotPublic = isPublic();
if (!isBotPublic && !isAccess) return;
console.log(`\x1b[35m[ PESAN ]\x1b[0m \x1b[36m${m.body}\x1b[0m Dari \x1b[33m${m.pushName}\x1b[0m`);
//====================
switch (command) {
case 'public': {
if (!isAccess) return m.reply(mess.owner);
if (isPublic()) return m.reply("Eeh? Kan dari tadi udah Public, loh~");
setPublic(true);
m.reply(mess.succes);
}
break;
//============
case 'self': {
if (!isAccess) return m.reply(mess.owner);
if (!isPublic()) return m.reply("Eeh? Kan dari tadi udah self, loh~");
setPublic(false);
m.reply(mess.succes);
}
break;
//====================
case "menu":
case "help":
  const itsmenu = `Konnichiwa, ${m.pushName}
Zennco desu, Yoroshiku!

# Komando Ichiran:
> /self
> /public
> /addacces
> /delacces`;

  await m.replyWithDocument(
    { source: 'package.json', filename: '☴ 私はハンサムです.html' },
    {
      caption: itsmenu,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '☲ オンライン?', callback_data: `${prefix}test` }]
        ]
      }
    }
  );
break;
//============
case "test": 
m.reply("> Zyenxo Always On")
break;
//============
case "addacces": {
if (!isAccess) return m.reply(mess.owner);
if (!text) return m.reply(`❌ Example: ${prefix + command} (nomor)`);
let user = text.replace(/[^\d]/g, "");
addPremiumUser(user, 30);
m.reply(`✅ Added Premium:\n• ${user} (30 days)`)}
break;
//============
case "delacces": {
if (!isAccess) return m.reply(mess.owner);
if (!text) return m.reply(`❌ Example: ${prefix + command} (nomor)`);
const user = text.replace(/[^\d]/g, "");
const removed = delPremiumUser(user);
if (removed) {
m.reply(`✅ Premium dihapus:\n• ${user}`);
} else {
m.reply("❌");
}
}
break;
//============
default:
break;
}} catch (err) {
console.error(("❌ ERROR: "), err)}};