const sql = require('sqlite-sync');
const md5 = require('md5');
class Users {
   static validToken(token){
    var status = false;
    sql.connect('./data/users.db');
    sql.run(`SELECT token FROM users WHERE token='${token}'`, (res) => {
      if(res.error){
        throw res.error;
        sql.close();
        return status
      }
      console.log(res);
      if(res[0].token==token) status=true;
      });
    sql.close();

    return status
  }
}
module.exports=Users;
