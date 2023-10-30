const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL");
});

connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME} `, (error) => {

    if (error) {
        console.log(`Error creating database:`, error.message);
        return;
    }
    {
        console.log(`database ${process.env.DB_NAME} created.`);
    }
});

const userSchema = `CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number INT(10) NOT NULL,
    email VARCHAR (50) NOT NULL  ,
    password VARCHAR (10) NOT NULL    
  );`

connection.query(userSchema, (error) => {
if(error){
   console.log("Error creating table:", error.message);}
   else{
    console.log("user table is created");
   }
   
});

module.exports = connection;
