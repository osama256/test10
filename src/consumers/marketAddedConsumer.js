const amqp = require('amqplib')
const mongoose = require('mongoose')
const Market = mongoose.model('Market')
const getUserName = require('../helper/userName')
// const connect = async (ip,username,password,ch) => {
module.exports = async (ip, username, password, ch) => {
    console.log('ip :', ip)
    console.log('username :', username)
    console.log('password :', password)
    console.log('ch :', ch)
    try {
        // const connection = await amqp.connect('amqp://localhost:5672')
        const connection = await amqp.connect({
            protocol: 'amqp',
            hostname: ip,
            port: '5672',
            username,
            password
        })
        // protocol?: string | undefined;
        // hostname?: string | undefined;
        // port?: number | undefined;
        // username?: string | undefined;
        // password?: string | undefined;
        // locale?: string | undefined;
        // frameMax?: number | undefined;
        // heartbeat?: number | undefined;
        // vhost?: string | undefined;
        const channel = await connection.createChannel()
        // const result = await channel.assertQueue("jobs")
        const result = await channel.assertQueue(ch, { durable: true })
        // channel.ackAll()
        // channel.consume('jobs',msg=>{
        channel.consume(ch, async msg => {
            console.log('MARKETADDEDCONSUMER# ')
            // console.log(msg.content.toString())
            let results = JSON.parse(msg.content.toString())

            // 2- save new user {userName,region,nodeName}
            const { userName, regionIP, email } = results
            console.log('MARKETADDEDCONSUMER# data we got , userName :', userName, " regionIP :", regionIP,)
            let Coll = getUserName(userName)
            const user = new Coll({ userName, region: regionIP, email })
            let market = new Market({ userName, region: regionIP, email })
            console.log(user)
            try{
                await user.save()
            }catch(e){}
            try{
                await market.save()
            }catch(e){}
            // }, 1800000);
            channel.ack(msg)
        })
        console.log('Waiting for messages...')
    }
    catch (e) {
        console.error(e)
    }
}
// connect()