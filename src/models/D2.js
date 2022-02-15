const mongoose = require('mongoose')
const d2= mongoose.Schema({
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
mongoose.model('D2', d2)