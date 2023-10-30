const connection = require("../../db");

const {registerController} = (req,res)=>{
    console.log("err",  req?.body);
    // return res.json({"ok":"ok"},200);

    const {first_name,last_name,phone_number,email,password} = req.body;

    const query = `INSERT into user(first_name, last_name, phone_number, email, password) VALUES(?,?,?,?,?)`;
    connection.query(query,[first_name,last_name,phone_number,email,password],(err,result)=>{
        if(err){
            console.log("errrr", err);
            res.status(404).json({msg: "not ok"});
        }else{
            res.status(200).json({"res" : result});
        }
    })
}

module.exports= {registerController};
