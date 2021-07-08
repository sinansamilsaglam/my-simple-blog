const express = require("express"),
      mongoose = require("mongoose"),
      Blog = require("../models/blogModel"),
      router = express.Router();

router.get("/addNewBlog", isLogin, (req, res)=>{
    res.render("blog/newBlog");
});

router.post("/addNewBlog", isLogin, (req, res)=>{
    let title = req.body.data.blogTitle;
    let comSentence = req.body.data.comSentence;
    let comImage = req.body.data.comImage;
    let blog = req.body.data.blog;

    var newBlog = {
            title: title,
            comSentence: comSentence,
            comImage: comImage,
            blog: blog
    };

    Blog.create(newBlog)
    .then((newBlog)=>{
        console.log(newBlog);
        res.status(201).json(newBlog);
    })
    .catch((err)=>{
        console.log("ERROR");
        console.log(err);
        res.send(err);
    });
});


router.get('/blogs/:blogId', (req, res)=>{
    Blog.findById(req.params.blogId).then((foundBlog)=>{
        res.render("blog/showBlog", {foundBlog: foundBlog});
    }).catch((err)=>{
        console.log("ERROR");
        console.log(err);
        res.send(err);
    });
});

router.delete("/blogs/:blogId", isLogin, function(req, res){
    Blog.findByIdAndRemove(req.params.blogId, function(err){
        if(err){
            console.log(err);
            res.redirect("/");
        } else {
            res.redirect("/");
        }
    });
});

function isLogin(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signin");
}

module.exports = router;