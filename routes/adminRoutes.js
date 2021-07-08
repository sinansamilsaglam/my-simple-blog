const express = require("express"),
      User = require("../models/userModel"),
      passport = require("passport"),
      router = express.Router();


let adminActions = [
    {
        actionId: 1,
        actionName: "addNewBlog",
        displayName: "Yeni Blog Yazısı Gir."
    }
   
];      

router.get("/admin", isLogin, (req, res)=>{
        res.render('admin/admin', {adminActions: adminActions});
    });


router.get("/signin", (req, res)=>{
        res.render('admin/signin');
});

router.post("/signin", passport.authenticate("local",
    {
        successRedirect:"/",
        failureRedirect:"/signin"
    }),
(req, res)=>{});
/*
router.post("/signin", (req, res)=>{
    if(username == "sin@gmail.com" && password == "asd123"){
        res.redirect("/");
    }
});
*/

router.get("/signup", isLogin,  (req, res)=>{
    res.render('admin/signup');
});

router.post("/signup", isLogin, (req, res)=>{
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user)=>{
        if(err)
        {
            console.log(err);
            res.redirect("/signup");
        }
        passport.authenticate("local")(req,res, ()=>{
            res.redirect("/");
        });
    })

});

function isLogin(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signin");
}

module.exports = router;