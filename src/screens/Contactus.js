import React, { useState } from 'react'

export default function Contactus() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    return (
        <form>
            <div class="form-group" style={{ marginBottom: 60, marginTop: 100 }} >
                <h1  style={{ display: 'flex', marginTop: 20, marginBottom: 30, alignItems: 'center', justifyContent: 'center' }}>Contact Us</h1>
                <text class="contact-header">Fill the below contact form or email us at info@mansourapp.com.</text>
            </div>
            <div class="form-group" style={{ marginBottom: 30 }}>
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" value={name} onChange={(value) => {
                    console.log(value.nativeEvent.data)
                    setName(value.target.value)
                }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />

            </div>
            <div class="form-group" style={{ marginBottom: 30 }}>
                <label for="exampleInputPassword1">Email</label>
                <input type="email" value={email} onChange={(email) => { setEmail(email.target.value) }} class="form-control" id="exampleInputPassword1" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group" style={{ marginBottom: 30 }}>
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" value={message} onChange={(msg) => { setMessage(msg.target.value) }} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            {loading ? <div class="form-group" style={{ marginBottom: 30 }}>
                <div class="spinner-border text-primary" role="status">
                    {/* <span class="visually-hidden">Loading...</span> */}
                </div>
            </div> : null}
            {error === 'failed' ? <div class="form-group" style={{ marginBottom: 30 }}>
                <div class="alert alert-danger" role="alert">
                    Couldn't send your message.
                </div>
            </div> : error === "sent" ? < div class="alert alert-success" role="alert">
                Thank you, your message has been sent successfully.
            </div> : null
            }
            <button type="button" class="btn btn-primary" style={{ marginBottom: 50 }} disabled={!name || !message || !(email.match(/^\S+@\S+\.\S+$/)) ? true : false}
                onClick={async () => {
                    setLoading(true)

                    // const response =await fetch(`${process.env.REACT_APP_API}/resetpasswordtoken`, {
                    await fetch(`${process.env.REACT_APP_LOGSHOST}/api/logs/message`, {
                        // const response = await fetch(`http://192.168.1.50:3000/message`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        // mode: 'cors',
                        body: JSON.stringify({ name, email, message })
                    }).then((res) => res.text())
                        .then((json) => {
                            //console.log(json)
                            // console.log('111111111111111111111111111111111')
                            setLoading(false)
                            setError('sent')
                            // history.push('/thanks')
                            return json
                        })
                        .catch((e) => {
                            // console.log(e)
                            // console.log('222222222222222222222222222222222')
                            setLoading(false)
                            setError('failed')
                            // history.push('/send')
                        })
                }}
            >Submit</button>
        </form >
    )
}
