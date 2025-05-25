//========KAGENOU========
require("./system/config");
const { Telegraf } = require("telegraf");
const fs = require("fs-extra");
const smsgTelegram = require('./system/lib/mytelegram');
const bot = new Telegraf(global.tokenbot);
//=====================
async function startbot() {
try {
await bot.launch();
} catch (error) {
console.error(error);
}}
//=====================
bot.on(["message", "callback_query"], async (zyn) => {
const m = smsgTelegram(zyn);
const handleCommand = require("./system/telegram");
try {
await handleCommand(m, bot, zyn);
} catch (err) {
console.error(("❌ ERROR: "), err);
}});
//=====================
// ART & START
console.log(
`███████╗███████╗███╗   ██╗ ██████╗ ██████╗ 
╚══███╔╝██╔════╝████╗  ██║██╔════╝██╔═══██╗
  ███╔╝ █████╗  ██╔██╗ ██║██║     ██║   ██║
 ███╔╝  ██╔══╝  ██║╚██╗██║██║     ██║   ██║
███████╗███████╗██║ ╚████║╚██████╗╚██████╔╝
╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝`);
startbot()
console.log(("-[ Telegram Terhubung ]"));
//=====================