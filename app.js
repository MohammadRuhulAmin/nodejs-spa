const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const app = express();
const port = 3000;
// app.listen(port,'localhost',()=>{
//     console.log(`server is listening at port : ${port}`)
// })
//mongodb+srv://<username>:<password>@cluster0.uyd5si2.mongodb.net/?retryWrites=true&w=majority
app.set('view engine','ejs')
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
    // const blogs = [
    //     {title:'First Title',snippet:'first title snippet'},
    //     {title:'Second Title',snippet:'Second Title Snippet'},
    //     {title:'Third Title',snippet:'Third Title Snippet'}
    // ];

    //res.render('index',{title:'home',blogs})
    res.redirect('/blogs')
})

app.get('/blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.render('index',{title:'All Blogs',blogs:result})
        })
        .catch((error)=>{
            console.log(error)
        })
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

app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title:'My Blog',
        snippet:'This is my new Blog',
        body:'The Blog is Awesome !'
    })
    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            console.log(error)
        })
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('62f6337073422de2b6b226c4')
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
})


app.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            console.log(error)
        })
})

// this is a middleware ! 
app.use((req,res)=>{
    res.status(404).render('404',{title:'404 Error Loading Page'});
})
