const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded( {extended:true} ))


app.get("/" , (req , res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/add" , (req , res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1+num2;

    res.send("Result is " + result);
})

app.post("/sub" , (req , res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1+num2;

    res.send("Result is " + result);
})

app.post("/mul" , (req , res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 * num2;

    res.send("Result is " + result);
})

app.post("/div" , (req , res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 / num2;

    res.send("Result is " + result);
})

app.listen(3000 , () => {
    console.log("Server is running on port: 3000");
})
