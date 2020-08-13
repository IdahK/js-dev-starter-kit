import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console*/

const port = 3000;
const app = express();

app.use(compression()); //
app.use(express.static('dist'));

app.get('/',function(req, res){
   res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users',function(req, res){
  //this info should be on a database
  res.json([
    {"id":1,"firstName":"Idah","lastName":"Smith","email":"idah@gmail.com"},
    {"id":2,"firstName":"Tom","lastName":"Brown","email":"brownttom@gmail.com"},
    {"id":3,"firstName":"Jane","lastName":"Smith","email":"jjane@gmail.com"}
  ]);
});

app.listen(port , function (err) {
  if (err) {
    console.log(err);
  }
  else{
    open('http://localhost:'+port);
  }
});
