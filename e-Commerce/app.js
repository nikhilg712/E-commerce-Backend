const http = require('http');
const path = require("path");
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const notFoundRoute = require('./routes/404')
const bodyParser = require('body-parser');

const express = require('express');
const exp = require('constants');

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoute)
app.use(shopRoute)
app.use(notFoundRoute)





app.listen(3000);
