const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : {type: String, required:"Boş bırakmazsan sevinirim."},
    comSentence : {type: String, required:"Boş bırakmazsan sevinirim."},
    comImage : {type: String, required:"Boş bırakmazsan sevinirim."},
    blog : {type: String, required:"Boş bırakmazsan sevinirim."},
    date : {type: Date, default : Date.now}
});

module.exports = mongoose.model("Blog", blogSchema);