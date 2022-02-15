const mongoose = require('mongoose')
const marketschema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    region: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})
mongoose.model('Market',marketschema)