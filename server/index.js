const
  express = require('express');
  Users = require('./users.js');
  console.log(Users);
var
  app = express();
/*app.set('view engine','ejs');
app.use('/src', express.static('src'));*/
app.post('/validuser/:token', (req,res) => {
  res.contentType('application/json');
  var resp =  Users.validToken(req.params.token);
  res.send( {status:resp} );
});
app.listen(80);
  //module.exports = require('./lib/telegram');
