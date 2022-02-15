const mongoose = require('mongoose')
const x= mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    region:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    // ,nodeName:{
    //     type:String,
    //     required:true
    // }
})
mongoose.model('X', x)