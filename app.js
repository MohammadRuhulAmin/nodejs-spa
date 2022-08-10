const express = require('express')
const app = express();
const port = 3000;
app.listen(port,'localhost',()=>{
    console.log(`server is listening at port : ${port}`)
})
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    const blogs = [
        {title:'First Title',snippet:'first title snippet'},
        {title:'Second Title',snippet:'Second Title Snippet'},
        {title:'Third Title',snippet:'Third Title Snippet'}
    ];

    res.render('index',{title:'home',blogs})
})
app.get('/about',(req,res)=>{
    const about =[
        {description:"this is about 1"},
        {description:"this is about 2"},
        {description:"this is about 3"},
        {description:"this is about 4"},
        {description:"this is about 5"},
    ]
    res.render('about',{title:'about',about})
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'create'});
})
app.get('/about-us',(req,res)=>{
    res.redirect('/about',{title:'about'})
})

app.use((req,res)=>{
    res.status(404).render('404');
})
