import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7334563540:AAGYZ-7vkKq0Lb5f3TiWOhd1rFqBrznXw5Y"

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  console.log(msg);
  bot.sendMessage(chatId, "Xush kelibsiz");
});

console.log("Bot ishga tushdi...");
