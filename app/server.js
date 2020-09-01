const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000);