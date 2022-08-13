
const express = require('express')
const router = express.Router()


const BlogController = require('../controllers/BlogControllers')
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


router.get('/',BlogController.blog_index);
router.get('/:id',BlogController.blog_details);
router.delete('/:id',BlogController.blog_delete);
router.post('/',BlogController.blog_post);

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
