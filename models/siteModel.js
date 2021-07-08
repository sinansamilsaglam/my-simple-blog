const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
    homeImage : {type: String, required:"Boş bırakmazsan sevinirim."},
    aboutImage : {type: String, required:"Boş bırakmazsan sevinirim."},
    aboutText : {type: String, required:"Boş bırakmazsan sevinirim."},
    contactImage : {type: String, required:"Boş bırakmazsan sevinirim."},
    contactText : {type: String, required:"Boş bırakmazsan sevinirim."}
});

module.exports = mongoose.model("Site", siteSchema);