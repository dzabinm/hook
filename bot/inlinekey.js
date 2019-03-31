const
 TelegramBot = require('node-telegram-bot-api'),
 config = require('./assets/config.json'),
 sql = require('sqlite-sync'),
 bot = new TelegramBot(config.token, {polling: true});
 sql.connect('data/users.db');
 sql.run('CREATE TABLE IF NOT EXISTS ueser(id  INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT NOT NULL , regDate INTGER NOT NULL );',
       function(res) {
       if (res.error)
       throw res.error;
 });
bot.onText(/\/start/,(msg) => {
  var usertoken ='';
  const options = {
      reply_markup: JSON.stringify({
          keyboard: [
                [{ text: '1', callback_data: '1' }],
                [{ text: '2', callback_data: '2' }],
                [{ text: '3', callback_data: '3' }],
                [{ text: '4', callback_data: '4' }],
                [{ text: '5', callback_data: '5' }],
                [{ text: '6', callback_data: '6' }],
                [{ text: '7', callback_data: '7' }],
                [{ text: '8', callback_data: '8' }],
                [{ text: '9', callback_data: '9' }],
                [{ text: '0', callback_data: '0' }],
              ]
            })
          };
  bot.sendMessage(msg.from.id, `Ok! Please send your token ${msg.from.first_name+' ' + msg.from.last_name} .` , options);

    bot.on('callback_query', (msg) =>{
      if(usertoken.length<10){
      usertoken+=msg.data.toString();
      console.log('token='+usertoken.length);
    }else {
      bot.on('callback_query',()=>{return});
      bot.sendMessage(msg.from.id,'OK!');
      return
    }
    return
    });

});
/*bot.on('message',(msg) => {
  console.log(msg);
});*/
