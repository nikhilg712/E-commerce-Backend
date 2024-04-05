const http = require('http');
const path = require("path");
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const bodyParser = require('body-parser');

const express = require('express');
const exp = require('constants');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoute)
app.use(shopRoute)


app.use((req,res,next)=>{
    res.status(404).send("Not Found")
})


app.listen(3000);
