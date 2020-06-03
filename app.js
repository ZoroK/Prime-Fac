const express= require("express");
const app= express();

const apirt =  require('./api/rout');

app.use('/api',apirt);

app.use('/',express.static('stpub'));

module.exports=app;