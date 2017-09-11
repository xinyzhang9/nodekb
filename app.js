const express = require('express');
const path = require('path');

const app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','pug');

app.get('/',(req,res)=>{
  let articles = [
    {
      id:1,
      title: 'article 1',
      author: 'author 1',
      body: 'this is article 1'
    },
    {
      id:2,
      title: 'article 2',
      author: 'author 2',
      body: 'this is article 2'
    },
    {
      id:3,
      title: 'article 3',
      author: 'author 3',
      body: 'this is article 3'
    }
  ]
  res.render('index',{
    title:'Articles',
    articles:articles
  });
})

app.get('/articles/add',(req,res)=>{
  res.render('add_article',{
    title: 'add article'
  })
})

app.listen(8000,()=>{
  console.log('app running on localhost:8888  ')
});
