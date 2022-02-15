import React, { useState } from 'react'
require('dotenv').config()
export default function Contactus() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    return (
        <form>
            {/* <div class="form-group" style={{ marginBottom: 60 }} >
                <h1 style={{ displ ay: 'flex', marginTop: 20, marginBottom: 30, alignItems: 'center', justifyContent: 'center' }}>Contact Us</h1>
                <h5>Fill the below contact form or email us at info@mansourapp.com.</h5>
            </div> */}
            <div class="form-group" style={{ marginBottom: 30 }}>
                <label for="exampleInputEmail1">Username</label>
                <input type="text" class="form-control" value={name} onChange={(value) => {
                    console.log(value.nativeEvent.data)
                    setName(value.target.value)
                }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />

            </div>
            <div class="form-group" style={{ marginBottom: 30 }}>
                <label for="exampleInputPassword1">Email</label>
                <input type="email" value={email} onChange={(email) => { setEmail(email.target.value) }} class="form-control" id="exampleInputPassword1" placeholder="Enter email" />
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            {/* <div class="form-group" style={{ marginBottom: 30 }}>
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" value={message} onChange={(msg) => { setMessage(msg.target.value) }} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div> */}
            {loading ? <div class="form-group" style={{ marginBottom: 30 }}>
                <div class="spinner-border text-primary" role="status">
                    {/* <span class="visually-hidden">Loading...</span> */}
                </div>
            </div> : null}
            {/* {error == 'failed' ? <div class="form-group" style={{ marginBottom: 30 }}>
                <div class="alert alert-danger" role="alert">
                    Couldn't send your message.
                </div>
            </div> : error == "sent" ? < div class="alert alert-success" role="alert">
                Thank you, your message has been sent successfully.
            </div> : null
            } */}
            {error ? <div class="form-group" style={{ marginBottom: 30 }}>
                <div class="alert alert-danger" role="alert">
                    {error}
                </div>
            </div> : null
            }
            {/* <button type="button" class="btn btn-primary" style={{ marginBottom: 50 }} disabled={!name || !(email.match(/^\S+@\S+\.\S+$/)) ? true : false}
                onClick={async () => {
                    setLoading(true)

                    // const response =await fetch(`${process.env.REACT_APP_API}/resetpasswordtoken`, {
                    const response = await fetch(`${process.env.REACT_APP_API}/message`, {
                        // const response = await fetch(`http://192.168.1.50:3000/message`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        // mode: 'cors',
                        body: JSON.stringify({ name, email })
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
            >Submit</button> */}
            <button type="button" style={{ borderRadius: 30, padding: 0 }} disabled={!name || !(email.match(/^\S+@\S+\.\S+$/)) ? true : false}
                onClick={async () => {
                    setError('')
                    setLoading(true)


                    // const response =await fetch(`${process.env.REACT_APP_API}/resetpasswordtoken`, {
                    console.log(`gonna to fetch ${process.env.REACT_APP_PAYMENTHOST}/api/payment/marketcreatepayment`)
                     await fetch(`${process.env.REACT_APP_PAYMENTHOST}/api/payment/marketcreatepayment`, {
                        // const response = await fetch(`http://192.168.1.50:3000/message`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        // mode: 'cors',
                        body: JSON.stringify({ userName: name, email })
                        // }).then((res) => res.json())
                    }).then((res) => res.json())
                        .then((json) => {
                            if (json.error) {
                                console.log('errrror',json.error)
                                setLoading(false)
                                // setError(json.error)
                                setError("Payment failed, Try again later.")
                            }
                            else if (json.url) {

                                // console.log(json)
                                // console.log('111111111111111111111111111111111')
                                setLoading(false)
                                window.location.replace(json.url);
                                return null;
                                // setError('sent')
                                // // history.push('/thanks')
                                // return json
                            }
                        })
                        .catch((e) => {
                            console.log(e)
                            // console.log('222222222222222222222222222222222')
                            setLoading(false)
                            setError('failed',e)
                            // history.push('/send')
                        })

                }}>
                <img border="0" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" alt="Buy Now" />
                <img alt="" border="0" width="1" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
            </button>
        </form>

    )
}
