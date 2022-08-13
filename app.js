const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes  = require('./routes/blogRoutes')


const app = express();
const port = 3000;
app.use(express.static('public')) // it will give the permission to use a folder //
// app.listen(port,'localhost',()=>{
//     console.log(`server is listening at port : ${port}`)
// })
//mongodb+srv://<username>:<password>@cluster0.uyd5si2.mongodb.net/?retryWrites=true&w=majority
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}));
//const dbURI = 'mongodb+srv://ruhulamin_1995:ruhulamin25144747@cluster0.uyd5si2.mongodb.net/Cluster0?retryWrites=true&w=majority';
const dbURI_2 = 'mongodb+srv://ruhulamin_1995:ruhulamin25144747@cluster0.uyd5si2.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(dbURI_2)
        .then((result)=>{
            app.listen(port,'localhost',()=>{
                console.log(`server is listening at port : ${port}`)
                console.log('Connection has been established successfully!')
            })
        })
        .catch((error)=>console.log('disconnected from database'))
app.get('/about',(req,res)=>{
    const about =[
        {description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    ]
    res.render('about',{title:'about',about})
})

app.get('/',(req,res)=>{
    // const blogs = [
    //     {title:'First Title',snippet:'first title snippet'},
    //     {title:'Second Title',snippet:'Second Title Snippet'},
    //     {title:'Third Title',snippet:'Third Title Snippet'}
    // ];

    //res.render('index',{title:'home',blogs})
    res.redirect('/blogs')
})

        
app.get('/about-us',(req,res)=>{
    res.redirect('/about',{title:'about'})
})
        

app.use('/blogs',blogRoutes);

app.use((req,res)=>{
    res.status(404).render('404',{title:'404 Error Loading Page'});
})
