const http = require('http');
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoute)
app.use(shopRoute)


app.use((req,res,next)=>{
    res.status(404).send("Not Found")
})


app.listen(3000);
