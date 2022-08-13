const Blog = require('../models/blog')

const blog_index = (req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('Blog/index',{title:'All Blogs',blogs:result})
    })
    .catch((error)=>{
        console.log(error)
    })
}

const blog_create = (req,res)=>{
    console.log(res)
    res.render('Blog/create',{title:"Create"});
    // res.render('Blog/create',{title:'Create'})
        // .then((result)=>console.log(result))
        // .catch((err)=>console.log(error)) 
}


const blog_details = (req,res)=>{
    const id = req.params.id
    console.log(id)
    Blog.findById(id)
        .then((result)=>{
            console.log(result)
            res.render('Blog/details',{blog:result,title:'Blog Details'})
        })
        .catch((err)=>{
            console.log(error)
        })
}

const blog_delete = (req,res)=>{
    const id = req.params.id 
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect:'/blogs'})
        })
        .catch((error)=>{
            console.log(error)
        })
}

const blog_post = (req,res)=>{
    const blog = new Blog(req.body)
    blog.save()
        .then((result)=>{
            res.redirect('/blogs')
        })
        .catch((error)=>{
            console.log(error) 
        })
}



module.exports = {
    blog_index,
    blog_details,
    blog_delete,
    blog_post,
    blog_create,
}