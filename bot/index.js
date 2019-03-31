const
 TelegramBot = require('node-telegram-bot-api'),
 config = require('./assets/config.json'),
 md5 = require('md5');
 sql = require('sqlite-sync'),
 request = require('request'),
 bot = new TelegramBot(config.token, {polling: true});

bot.onText(/\/start/,(msg) => {
  var usertoken;

  bot.sendMessage(msg.from.id, `Ok! Please send your token ${msg.from.first_name+' ' + msg.from.last_name} .`);
  bot.once('message',(msg)=>{
    var status = false;
    usertoken = md5(parseInt(msg.text));
    console.log(usertoken);
    request.post({url:`http://127.0.0.1/validuser/${usertoken}`}, (error,res,body) => {
      console.log(JSON.parse(body).status);
      status=JSON.parse(body).status;
      if (status) {
          bot.sendMessage(msg.from.id, `Succes!.`);
      }
      else{
          bot.sendMessage(msg.from.id, `Invalid token ,  you have to /start again`);
      }
    });

  });

});
