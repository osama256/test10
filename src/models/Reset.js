const mongoose = require('mongoose')
const resetSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    },
    region:{
        type:String,
        required:true
    }
})
mongoose.model('Reset',resetSchema)