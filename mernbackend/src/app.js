const { hasSubscribers } = require("diagnostics_channel");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const {Register}= require("./models/registers");


const app = express();

const port = process.env.PORT  || 5000;
const static_path = path.join(__dirname,"public")
const template_path = path.join(__dirname,"../templates/views")
//console.log(template_path )
const partials_path = path.join(__dirname,"../templates/partials")

app.use(express.static("public"));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res) => {
     res.render("index");
})

app.get("/register",(req,res) =>{
    res.render("register");
})

app.post("/register",async (req,res) =>{
    try{
      const password = req.body.password;
      const confirm = req.body.confirm;
      console.log("hii")
      if(password === confirm){
          console.log("from inside if") 
          const registerEmployee = new Register({
              email: req.body.email,
              username: req.body.username,
              password: password,
              confirm: confirm
          })   
       console.log("hello from outside")          
       console.log(registerEmployee)

       const registered = await registerEmployee.save();
       res.status(201).render("index");

      }
      else{
          res.send("password is not matching");
      }

    }catch(error){
        res.status(400).send(error);
    }
})




app.listen(port,() => {
    console.log(`server is running at port no ${port}`)
})