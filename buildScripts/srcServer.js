import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console*/

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/',function(req, res){
   res.sendFile(path.join(__dirname, '../src/index.html'));
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
