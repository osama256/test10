const path = require('path')
const fs = require('fs')
const publisher = require('./Publisher')
require('dotenv')
// const msg = {number:process.argv[2]}
// const connect = async (ip, username, password, ch, msg) => {
module.exports = async (ch, msg) => {
    let numOfRegions;
    fs.readFile('numOfRegions', function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
        numOfRegions = parseInt(data)
        for (let i = 0; i <= numOfRegions; i++) {
            publisher(process.env.ip, process.env.brokerusername,
                brokerpassword, i + ch, msg)
        }
    })
}