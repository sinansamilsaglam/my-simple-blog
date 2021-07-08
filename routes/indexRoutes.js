const express = require("express"),
      Blog = require("../models/blogModel"),
      router = express.Router();
/*
let data = [
    {
        postTitle: "Deneme Blog",
        postSubtitle: "Bu bir blog deneme yazısıdır.",
        image: "https://i.pinimg.com/originals/1c/83/be/1c83bee8e846594fd22ea572a6b18e9e.jpg"
        
    },
    {
        postTitle: "Deli Yürek",
        postSubtitle: "Hayda rinna rinna rinanay",
        image: "https://yt3.ggpht.com/ytc/AKedOLSQU5Fdv1Y7y3NSqEEtkYbt_5TUBfaXxnUlEeTL=s900-c-k-c0x00ffffff-no-rj"
        
    },
    {
        postTitle: "Ceviz Ağacı",
        postSubtitle: "Ben bir ceviz ağacıyım Gülhane Parkındaaa",
        image: "https://www.cevizfidanifiyatlari.com.tr/images/ceviz-agaci-resimleri.jpg"
        
    }
]
*/
router.get("/", (req, res)=>{
       Blog.find({},(err, foundBlogs)=>{
           if(err){
               console.log("ERROR");
               console.log(err);
           }
           else {
               console.log("BÜTÜN YAZILAR");
               console.log(foundBlogs);
               res.render('home', {foundBlogs: foundBlogs});
           }
       })
       
});

router.get("/about", (req, res)=>{
    res.render('about');
});



module.exports = router;