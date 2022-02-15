const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
// var path = require('path')
// const cors = require('cors');
const cors = require('cors');
require('./src/models/IP')
// require('./src/models/IPBan')
require('./src/models/Reset')
require('./src/models/A1')
require('./src/models/A2')
require('./src/models/A3')
require('./src/models/A4')
require('./src/models/A5')
require('./src/models/B1')
require('./src/models/B2')
require('./src/models/C1')
require('./src/models/C2')
require('./src/models/C3')
require('./src/models/D1')
require('./src/models/D2')
require('./src/models/E1')
require('./src/models/E2')
require('./src/models/E3')
require('./src/models/F')
require('./src/models/G')
require('./src/models/H')
require('./src/models/I')
require('./src/models/J1')
require('./src/models/J2')
require('./src/models/J3')
require('./src/models/K1')
require('./src/models/K2')
require('./src/models/L1')
require('./src/models/L2')
require('./src/models/L3')
require('./src/models/M1')
require('./src/models/M2')
require('./src/models/M3')
require('./src/models/N')
require('./src/models/O')
require('./src/models/P')
require('./src/models/Q')
require('./src/models/R1')
require('./src/models/R2')
require('./src/models/S1')
require('./src/models/S2')
require('./src/models/T')
require('./src/models/U')
require('./src/models/V')
require('./src/models/W')
require('./src/models/X')
require('./src/models/Y')
require('./src/models/Z') 
require('./src/models/OTHER')
require('./src/models/Market')
const marketAddedConsumer = require('./src/consumers/marketAddedConsumer')
const marketDeletedConsumer = require('./src/consumers/marketDeletedConsumer');
const forgotPassword = require('./src/routes/forgotPassword')
const resetPassword = require('./src/routes/resetPassword')
const live = require('./src/routes/live')
const getSubscription = require('./src/routes/getSubscription')
// const { reset } = require('nodemon');

const mongo = `mongodb://${process.env.mongohost}:27017/WebsiteDB`

mongoose.connect(mongo)
mongoose.connection.on('connected', () => {
    console.log('connected to mongo successfully!')
})
mongoose.connection.on('error', () => {
    console.log('error')
})
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "https://mansourapp.com"); 
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    // res.header("Access-Control-Allow-Origin", "no-cors"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(resetPassword)
app.use(forgotPassword)
app.use(live)
app.use(getSubscription)
app.get('/api/web/marketforgotpassword',async (req,res)=>{
    console.log('route /api/web/marketforgotpassword')
     res.send('/api/web/marketforgotpassword requested')
})
app.get('/api/web/users',async (req,res)=>{
    const users =await  U.find({})
    console.log('users : ',users)
     res.status(200).send('users success: ')
})
app.use('/', express.static('./build'))
app.get('*', function(req, res) {
    // res.sendFile('index.html', {root: path.join(__dirname, '../../client/build/')});
    res.sendFile('index.html', {root:'./build'});
});
app.set('trust proxy', true)
app.listen(3002, () => {
    console.log('server started ...')
    marketAddedConsumer(process.env.msgbrokerhost, process.env.brokerusername,
        process.env.brokerpassword, 'marketadded-website')
    marketDeletedConsumer(process.env.msgbrokerhost, process.env.brokerusername,
        process.env.brokerpassword, 'marketdeleted-website')
        // deleteAdminConsumer(process.env.msgbrokerhost, process.env.brokerusername,
        // process.env.brokerpassword, 'deleteadminmreq')
})
