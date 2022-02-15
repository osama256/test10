const amqp = require('amqplib')
require('dotenv')

module.exports = async (ip, username, password, ch,cb) => {
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
        // channel.consume('jobs',msg=>{
            
        channel.consume( ch, msg => {
            // channel.ackAll()
            try{
                cb(msg)
            }
            catch(e){
                console.log('error we gonna try after 10 sec')
                setTimeout(() => {
                    cb(msg)
                }, 10000);
                return;
            }
            console.log(msg.content.toString())
            channel.ack(msg)
        })
        console.log('Waiting for messages...')
    }
    catch (e) {
        console.error(e)
    }
}
// connect()