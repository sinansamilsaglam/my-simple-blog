const mongoose = require("mongoose"),
      express = require("express"),
      bodyParser = require("body-parser"),
      expressSession = require("express-session"),
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      User = require("./models/userModel"),
      app = express();

const indexRoutes = require("./routes/indexRoutes"),
      adminRoutes = require("./routes/adminRoutes"),
      blogRoutes = require("./routes/blogRoutes");

mongoose.connect('mongodb://localhost/myBlog', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }).then(() => console.log( 'Database Connected' )).catch(err => console.log( err ));

//mongoose.connect("mongodb://localhost:3000/YourDB", { useNewUrlParser: true });
//mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(require("express-session")({
    secret:"güvenlik sorusu",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
/*
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
}); */
/*
app.use((req, res, next)=>{
    res.locals.currentUser= req.User;
    next();
});
*/
app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);

const server = app.listen(3000, (err)=>{
        if(err)
            console.log(err);
        
        console.log("Başlatıldı. Port numarası : %d ", server.address().port);
})