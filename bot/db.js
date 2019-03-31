const sql = require('sqlite-sync');
const md5 = require('md5');
sql.connect('data/users.db');
    sql.insert("ueser", {
          token: md5(1234567890),
          regDate: Date.now()
         },
         (res)=> {
           console.log(res);
            if (res.error) {
              throw res;
       }
     });
