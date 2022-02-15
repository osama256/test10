import React, { useState } from 'react'
// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";

import logo2 from '../images/success.png';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function SendEmail() {
    const { width, height } = useWindowDimensions()
    const [username, setUsername] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    return (
        loading ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: width, height: height  }}> <div><ClipLoader color="#fff" loading={loading} css={override} size={100} /></div></div> : success ? <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', width: width - 50, height: height - 50 }}>
            {/* Thanks Screen */}
            <img src={logo2} alt="Success" style={{ width: 100, height: 100, marginBottom: 20 }} />
            {/* <div style={{marginBottom:10}}>
            <label style={{ color: '#b6b6b6', fontSize: 20 }}>Password Changed!</label>
        </div> */}
            <div>
                {/* <label style={{ color: '#b6b6b6', fontSize: 14 }}>Your password has been changed successfully.</label> */}
                <label style={{ color: 'green', fontSize: 16 }}>Thanks! If your username and email address match, you'll get an email with a link to reset your password shortly..</label>
            </div>
        </div> :
            <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
                <form >
                    <div style={{ marginTop: 10, marginLeft: 5 }}>
                        <label style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 25 }}>Reset Password</label>
                    </div>
                    <div style={{ marginLeft: 30, marginTop: 20 }}>

                        <div style={{ marginBottom: 10 }}>
                            <label className="App-label">Username</label><br />
                            <input type="text" className="App-input" value={username} onChange={(e) => {
                                setUsername(e.target.value)
                            }} />
                            <br />
                        </div>
                        <label className="App-label">Email</label> <br />
                        <input type="text" className="App-input" value={email} onChange={(e) => {
                            //   //console.log('event ', e.target.value)
                            if (!e.target.value.match(/^\S+@\S+\.\S+$/)) {
                                setEmailErrorMessage('invalid email')
                                //console.log('valid email')
                            }
                            else {
                                setEmailErrorMessage('')
                            }
                            setEmail(e.target.value)
                        }
                        } />
                        {/* <div style={{ color: 'red', marginTop: 10, fontSize: 12 }}>{emailErrorMessage}</div> */}
                        <div style={{ color: '#a32121', marginTop: 20, fontSize: 14 }}>{emailErrorMessage}</div>
                        <div style={{ marginTop: 40, }}>
                            {/* <input disabled={username && !emailErrorMessage?false:true} type="submit" style={{ borderRadius: 0 }} className="App-button" value="Send" onClick={async () => { */}
                            <button className="button" disabled={username && !emailErrorMessage && email.length>0?false:true}  onClick={async () => {
                                setLoading(true)
                                 const response =await fetch(`${process.env.REACT_APP_MASTERHOST}/api/web/marketforgotpassword`, {
                                // const response = await fetch(`http://143.110.239.21:3000/marketforgotpassword`, {
                                // const response = await fetch(`http://192.168.1.50:3000/marketforgotpassword`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    // mode: 'cors',
                                    body: JSON.stringify({ userName: username, email, ip: 21 })
                                }).then((res) => res.text())
                                    .then((json) => {
                                        ////console.log(json)
                                        // //console.log('111111111111111111111111111111111')
                                        setLoading(false)
                                        // history.push('/thanks')
                                        return json
                                    })
                                    .catch((e) => {
                                        //console.log(e)
                                        //console.log('222222222222222222222222222222222')
                                        setLoading(false)

                                        // history.push('/send')
                                    })
                                //console.log('response ', response)
                                switch (response) {
                                    case 'Sent':
                                        {
                                            //console.log('1111111111111111111111111')
                                            setSuccess(true)
                                            // history.push('/thanks')
                                            return
                                        }
                                    default:
                                        //console.log('00000000000000000000000000000000')
                                        // //console.log('default')
                                        //console.log(JSON.parse(response).error)
                                        // setSuccess(true)
                                        setEmailErrorMessage(JSON.parse(response).error)
                                        return
                                }
                            }}
                            >Send</button>
                            {/* <AwesomeButton type="primary" onPress={() => {//console.log('fsfsfsfs')}}>Button</AwesomeButton>; */}
                        </div>
                    </div>
                </form>
            </div>
    )
}
