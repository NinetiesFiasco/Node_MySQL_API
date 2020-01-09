const pool = require("../dbconfig/mysql");

module.exports = {
  add: (data, callBack)=>{      
    pool.query(
      `INSERT INTO TableName(first, second, third) VALUES (?,?,?)`,
      [data.first, data.second, data.third],
      (error,results,fields)=>{
        return callBack(error, results);
      }
    );
  },
  update: (id,data,callBack) =>{        
    pool.query(
      `UPDATE TableName SET first=?,second=?,third=? WHERE guid=?`,
      [data.first, data.second, data.third, id],
      (error,results,fields) =>{
        return callBack(error,results);
      }
    );
  },
  delete: (id,callBack) =>{
    pool.query(
      `DELETE FROM TableName WHERE guid = ?`,
      [id],
      (error,results,fields)=>{
        return callBack(error,results[0]);
      }
    );
  },
  get: (id,callBack) =>{
    pool.query(
      `SELECT guid,first,second,third FROM TableName WHERE guid=?`,
      [id],
      (error,results,fields) =>{
        return callBack(error,results[0]);
      }
    );
  },  
  getAll: (callBack) =>{
    pool.query(
      `SELECT guid,first,second,third FROM TableName`,
      [],
      (error,results,fields) =>{
        return callBack(null,results);
      }
    );
  }
};