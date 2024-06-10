const pool= require("../config/database")

const create= async (id_user, username, password_hash)=>{
    sql= "INSERT INTO users (id_user, username, password_hash) VALUES(?, ?, ?)"
    const [result]= await pool.query(sql, [id_user, username, password_hash]);
    const [rows]= await pool.query("SELECT username FROM users WHERE id= ?", [result.insertId]);
    return rows[0] || {}
}

const findByUsername= async (username)=>{
    sql= "SELECT id_user, username, password_hash as password FROM users WHERE username= ?"
    const [rows]= await pool.query(sql, [username])
    return rows[0] || {}
}

module.exports= {create, findByUsername}