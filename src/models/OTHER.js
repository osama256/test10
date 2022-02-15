const mongoose = require('mongoose')
const other= mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    accountStatus:{
        type:Number,
        default:1
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
mongoose.model('OTHER', other)