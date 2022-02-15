const mongoose = require('mongoose')
const ipBanSchema = mongoose.Schema({
    ip:{
        type:String,
        reuqired:true
    },
    withoutToken:{
        type:Number,
    },
    createdAt: { type: Date, expires: '43829m',default:Date.now }
})
mongoose.model('IPBan',ipBanSchema)