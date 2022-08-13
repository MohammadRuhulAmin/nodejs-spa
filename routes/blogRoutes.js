
const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

router.get('/create',(req,res)=>{
    res.render('create',{title:'create'})
})

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


router.get('/',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.render('index',{title:'All Blogs',blogs:result})
        })
        .catch((error)=>{
            console.log(error)
        })
})

router.delete('/:id',(req,res)=>{
    const id = req.params.id 
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect:'/blogs'})
        })
        .catch((error)=>{
            console.log(error)
        })
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    console.log(id)
    Blog.findById(id)
        .then((result)=>{
            console.log(result)
            res.render('details',{blog:result,title:'Blog Details'})
        })
        .catch((err)=>{
            console.log(error)
        })
})

router.post('/',(req,res)=>{
    //console.log(req.body);
    const blog = new Blog(req.body)
    blog.save()
        .then((result)=>{
            res.redirect('/blogs')
        })
        .catch((error)=>{
            console.log(error) 
        })
})


// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title:'My Blog',
//         snippet:'This is my new Blog',
//         body:'The Blog is Awesome !'
//     })
//     blog.save()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
// })

// app.get('/single-blog',(req,res)=>{
//     Blog.findById('62f6337073422de2b6b226c4')
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// })


// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
// })

// this is a middleware !

module.exports = router;
