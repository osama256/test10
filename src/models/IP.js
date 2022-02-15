const mongoose = require('mongoose')
const ipSchema = mongoose.Schema({
    ip:{
        type:String,
        reuqired:true
    },
    createdAt: { type: Date, expires: '10m',default:Date.now }
})
mongoose.model('IP',ipSchema)