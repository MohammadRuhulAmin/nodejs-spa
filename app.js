const express = require('express')
const morgan = require('morgan')

const app = express();
const port = 3000;
app.listen(port,'localhost',()=>{
    console.log(`server is listening at port : ${port}`)
})
app.set('view engine','ejs')

//app.use(morgan('dev'));

// app.use((req,res,next)=>{
//     console.log('New Request Made : ')
//     console.log('Host :', req.hostname)
//     console.log('Path : ',req.path)
//     console.log('Method: ',req.method)
//     next()
// });

// app.use((req,res,next)=>{
//     console.log("This is a custom middleware...")
//     next()
// })
app.get('/',(req,res)=>{
    const blogs = [
        {title:'First Title',snippet:'first title snippet'},
        {title:'Second Title',snippet:'Second Title Snippet'},
        {title:'Third Title',snippet:'Third Title Snippet'}
    ];

    res.render('index',{title:'home',blogs})
})

app.use(express.static('public')) // it will give the permission to use a folder //

app.get('/about',(req,res)=>{
    const about =[
        {description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    ]
    res.render('about',{title:'about',about})
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'create'});
})
app.get('/about-us',(req,res)=>{
    res.redirect('/about',{title:'about'})
})


// this is a middleware ! 
app.use((req,res)=>{
    res.status(404).render('404',{title:'404 Error Loading Page'});
})
