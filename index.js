const
 TelegramBot = require('node-telegram-bot-api'),
 config = require('./assets/config.json'),
 md5 = require('md5');
 sql = require('sqlite-sync'),
 bot = new TelegramBot(config.token, {polling: true});
 
bot.onText(/\/start/,(msg) => {
  var usertoken;

  bot.sendMessage(msg.from.id, `Ok! Please send your token ${msg.from.first_name+' ' + msg.from.last_name} .`);
  bot.once('message',(msg)=>{
    usertoken = parseInt(msg.text);
    if(usertoken.length!=10)
  });

});
