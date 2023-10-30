const express = require("express");
require("dotenv").config();


 const PORT = process.env.PORT;


const app = express();
app.use(express.json());

// app.use("/user",userRouter);



app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});