// here we will connect db with r express app
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Registration", {
    //we need write this for not getting deprecation warning
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(e);
});