const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Reset = mongoose.model('Reset')
const bcrypt = require('bcrypt')
const IP = mongoose.model('IP')
const getUserName = require('../helper/userName')
const resetPass = require('../api/email/resetPassword')
// const requireAuth = require('../middlewares/marketRequireAuth')
router.post('/api/web/marketforgotpassword', async (req, res) => {
    console.log('forgot password requested')
    const { userName, email } = req.body
    if (!userName || !email || typeof (userName) === "object" || typeof (email) === "object") return res.status(410).send({ error: 'invalid request' })
    // const market = await Market.findOne({userName,email},{lastForgotPassword:1})
    // if(Date.now()-parseInt(market.lastForgotPassword) < 120000){
    //     //must wait after 2 min, 600k = 10 min
    //     return res.status(410).send({error:'you must wait after 2 min'})
    // }
    let ip = req.socket.remoteAddress.split('ff:')[1]
    let ip2 = await IP.findOne({ ip })
    if (ip2) {
        // console.log('you must wait about 1 min')
        return res.status(411).send({ error: "Looks like you've been doing that a lot. Take a break for 10 minutes before trying again." })
    }
    else {
        // let market = await Market.findOne({ email }, { userName: 1 })
        const Coll = getUserName(userName)
        let user = await Coll.findOne({userName,email})
        // let market = await Market.findOne({ email, userName }, { userName: 1 })
        // console.log('market ', market)
        //don't let user know if i send message or not when he enter invalid info
        // if(!market) return res.status(410).send({error:'invalid request'}) 
        if (!user) {
            console.log('user not found')
            const newIP = new IP({ ip })
            await newIP.save()
            return res.send('Sent')
        }
        let oldReset = await Reset.findOne({ email })
        if (oldReset) {
            console.log('user reset password before')
            console.log(`link we gonna send : https://mansourapp.com?token=${oldReset.token}`)
            // http://mansourapp.com:8000/
            // resetPass(email, `${process.env.ip}:8000/reset?token=${oldReset.token}`)
            resetPass(email, `https://mansourapp.com?token=${oldReset.token}`)

            // resetPass(email, `${process.env.masterip}?token=${oldReset.token}`)
            // console.log('please go to : ',`${process.env.masterip}?token=${oldReset.token}`)
        }
        else {
            console.log('new user forgot password')
            // let token = bcrypt.hash(Math.floor(Math.random() * 1000000000000).toString(), 10, async function (err, hash) {
            let token = bcrypt.hashSync(Math.floor(Math.random() * 1000000000000).toString(), 10);
            try {
                console.log('11111111111111111111111111111111111111')
                const resetRecord = new Reset({ userName, email, token,region:user.region })
                await resetRecord.save()
                // console.log(hash)
            }
            catch (e) {
                //user enter this case if server failed to generate bcrypt
                console.log('222222222222222222222222222222222222222')
                return res.status(410).send({ error: 'invalid request' })
            }
            // resetPass(email, `https://mansourapp.com?token=${token}`)
            console.log(`link we gonna send : https://mansourapp.com?token=${token}`)

            resetPass(email, `https://mansourapp.com?token=${token}`)
            // console.log(`please got to : ${process.env.masterip}?token=${token}`)
            // resetPass(email, `${process.env.ip}:8000/reset?token=${token}`)
            // });
        }
        console.log('ip now : ', ip)
        const newIP = new IP({ ip })
        await newIP.save()
        console.log('we gonna return NOW')
        return res.send("Sent")
    }
})
module.exports =router 