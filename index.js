import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8490638499:AAFYkpJNUIRk0t63dKgMdD3RsqRWpFbszJY";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  console.log(msg);
  bot.sendMessage(chatId, "Xush kelibsiz");
});

console.log("Bot ishga tushdi...");
