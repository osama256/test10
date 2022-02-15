const path = require('path')
const fs = require('fs')
const publisher = require('./Publisher')
require('dotenv')
// const connect = async (ip, username, password, ch, msg) => {
module.exports = async (region, ch, msg) => {
    publisher(process.env.ip, process.env.brokerusername,
        brokerpassword, region + ch, msg)

}