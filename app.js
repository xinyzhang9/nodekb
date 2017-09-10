const express = require('express');
const path = require('path');

const app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','pug');

app.get('/',(req,res)=>{
  res.render('index',{
    title:'hi'
  });
})

app.listen(8888,()=>{
  console.log('app running on localhost:8888  ')
});
