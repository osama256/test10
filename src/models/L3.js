const mongoose = require('mongoose')
const  l3= mongoose.Schema({
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
mongoose.model('L3', l3)