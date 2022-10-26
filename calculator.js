const express = require("express");
const bodyParser = require("body-parser");
 
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res)=>{
const firstNum = +req.body.num1;
const secondNum = +req.body.num2;
const result = firstNum + secondNum;
res.send("The sum is "+result);
});

app.listen(3000, () => {
    console.log("Application started on port 3000");
})