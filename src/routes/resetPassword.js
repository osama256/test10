const express = require('express')
const router = express.Router()
require('dotenv').config()
const mongoose = require('mongoose')
const Reset = mongoose.model('Reset')
const publisher = require('../api/rabbitmq/Publisher')
router.post('/api/web/resetpasswordtoken', async (req, res) => {
    console.log('reset password token requested')
    // console.log('req ,',req)
    // console.log('req ,',req.token)
    const { password, token } = req.body
    console.log(password, token)
    if (!password || !token || typeof (token) === 'object') {
        console.log('no token or password')
        return res.status(410).send({ error: 'invalid request' })
    }
    try {
        const reset = await Reset.findOne({ token })
        if (reset) {
            const { email, userName,region } = reset
            try{
                publisher(process.env.msgbrokerhost,process.env.brokerusername,
                    process.env.brokerpassword,region+"resetpassword",{userName,password})
            }
            catch(e){
                return res.status(411).send({error:e})
            }
            // const hash = await bcrypt.hash(password, process.env.marketsalt)
            // await Market.updateOne({ email, userName }, { password: hash })
            await Reset.deleteOne({ token })
            console.log('saved new passwrd')
            return res.send('saved')
        }
        else {
            console.log('unable to find this token')
            // res.status(410).send({error:'invalid request'})
            return res.send('failed')
        }

    } catch (e) {
        console.log('mongoose error')
        res.status(410).send({ error: 'invalid request' })
    }
})

router.get('/api/web/verifytoken', async (req, res) => {
    console.log('verify token requested')
    const token = req.query.token
    if (!token || typeof (token) === "object") return res.status(410).send({ error: 'invalid request' })
    const reset = await Reset.findOne({ token })
    if (reset) {
        return res.send('')
    }else{
        return res.status(410).send({error:'invalid request'})
    }

})
module.exports =router 