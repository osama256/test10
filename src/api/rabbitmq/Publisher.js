const amqp = require('amqplib')
// const msg = {number:process.argv[2]}
// const connect = async (ip, username, password, ch, msg) => {
module.exports = async (ip, username, password, ch, msg) => {
    try {
        // const connection = await amqp.connect('amqp://localhost:5672')
        // const connection = await amqp.connect('amqp://104.248.241.253:5672')
        const connection = await amqp.connect({
            protocol: 'amqp',
            hostname: ip,
            port: '5672',
            username,
            password
        })
        const channel = await connection.createChannel()
        const result = await channel.assertQueue(ch, { durable: true })
        channel.sendToQueue(ch, Buffer.from(JSON.stringify(msg)), { persistent: true })
        console.log('job sent successfully')
    }
    catch (e) {
        console.error(e)
    }
}