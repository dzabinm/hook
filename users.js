const sql = require('sqlite-sync');
const md5 = require('md5');
class Users {
   static validToken(token){
    sql.connect('data/users.db');
    sql.run(`SELECT token FROM ueser WHERE token='${token}'`, (res) => {
      if(res.error){
        throw res.error;
        sql.close();
        return false
      }
      });
    sql.close();
    return true
  }
}
