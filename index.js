const express = require("express");
const auth = require("./Route/Authentic")
const app = express();
app.use(express.json());
app.use('/Authentic',auth)

app.get('/',(req,res)=>{
    res.send("Done!!");
})

app.listen(8000,()=>{
    console.log("connecting");
})
