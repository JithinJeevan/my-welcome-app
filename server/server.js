const express = require("express");
const mongoose = require("mongoose");
const Register = require("./registerModel");
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 7397;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Jithin_88jeevan:071263%40Jj@cluster0.x0rbw.mongodb.net/myWelcomeApp?retryWrites=true&w=majority"
);


app.post("/api/register", async (req, res) => {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE"); 

  const username = req.body.username;
  const password = req.body.password;
  const user =await Register.findOne({username: username});
  try{
 if(user===null){
    const newEntry = Register({
      username: username,
      password: password,
    });
    const registerData = await newEntry.save();
  res.send({ status: 200, success: true, data:"Registration Successful" });
}else{
  res.send({ status: 208, success: false, data: "User Already Exists" })
} 
}catch{
  res.send({ status: 500, success: false, data: "Error in Registration" })
}
});


const generateAccessToken = (username) => {
  return jwt.sign({username: username }, "mySecretKey", {
    expiresIn: "1h",
  });
};

app.post("/api/login", async(req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user =await Register.findOne({username: username});
  
 
  try{
    if(user!==null){ 
      const accessToken = generateAccessToken(username);
      res.send({status:200,success:true,data:{message:"Login Success",token:accessToken,data:user}})
    }
    else{
    res.send({status:400,success:false,data:"Invalid Credentials"});

    }
 
  }catch{
    res.send({status:500,success:false,data:"Error in Login"});

  }
});

app.get("/api/logout", async(req, res) => {
 
  try{
  
  res.send({status:200,success:true,data:"Logout Success"});
  }catch{
    res.send({status:500,success:false,data:"Error logging out"});

  }
});

app.listen(port, () => {
  console.log("Server " + port + " is on");
});
