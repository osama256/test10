import React, { useState, useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import axios from 'axios'
import logo2 from '../images/success.png';
import logo3 from '../images/invalid.png';
// import logo3 from '../images/invalid2.jpg';
// import logo3 from '../images/invalid3.png';
// import logo3 from '../images/invalid4.png';
// import  '../App.css';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

require('dotenv').config()
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  // console.log(query)//"app=article&act=news_content&aid=160990"
  var vars = query.split("&");
  // console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    //console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
    if (pair[0] === variable) { return pair[1]; }
  }
  return (false);
}

export default function ResetPassword({ history, location, match }) {
  const { height, width } = useWindowDimensions()
  //console.log(height, width)
  //console.log(location)
  const [pageFound, setPageFound] = useState(true)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [token, setToken] = useState('')
  useEffect(() => {
    const checktoken = async () => {
      let x = getQueryVariable('token')
      if (x) {
        try{
          console.log('MASTERHOST :',process.env.REACT_APP_MASTERHOST)
          const response = await axios.get(`${process.env.REACT_APP_MASTERHOST}/api/web/verifytoken?token=${x}`)
          console.log('what we got : ',response.data)
          // const response = await axios.get(`http://192.168.1.50:3000/verifytoken?token=${x}`)
          setToken(x)
        }catch(e){
          console.log('could not verify token')
          history.push('/send')
        }          
        

        // setLoading(false)
      }
      else {
        setPageFound(false)
        // history.push('/fsfs')
      }
    }
    checktoken()
    //console.log('x : ', x)
    // addToken(x)
    // var query = window.location.search.substring(1);
    // console.log(query)
  }, [])
  return (

    !pageFound ? <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', width: width - 63, height: height - 50, marginTop: 50, marginBottom: 50 }}>
      {/* Thanks Screen */}
      <img src={logo3} alt="invalid" style={{ width: 147, height: 100, marginBottom: 10 }} />
      <div style={{ marginBottom: 0 }}>
        <label style={{ color: '#b6b6b6', fontSize: 20, fontWeight: 'bold' }}>404</label>
      </div>
      <div>
        <label style={{ color: '#b6b6b6', fontSize: 14 }}>Page Not Found</label>
      </div>
    </div> : success ? <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', width: width - 50, height: height - 50 }}>
      {/* Thanks Screen */}
      <img src={logo2} alt="Success" style={{ width: 100, height: 100, marginBottom: 20 }} />
      <div style={{ marginBottom: 10 }}>
        <label style={{ color: '#000', fontSize: 20 }}>Password Changed!</label>
      </div>
      <div>
        <label style={{ color: '#000', fontSize: 14 }}>Your password has been changed successfully.</label>
      </div>
    </div> : loading ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: width, height: height - 50 }}> <div><ClipLoader color="#fff" loading={loading} css={override} size={100} /></div></div>
      : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form>
          <div style={{ marginTop: 10, marginLeft: 5 }}>
            <label style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>Reset Password</label>
          </div>
          <div style={{ marginLeft: 30, marginTop: 20 }}>

            <div style={{ marginBottom: 10 }}>
              <label className="App-label">Password</label><br />
              <input type="password" className="App-input" value={password} onChange={(e) => {
                // console.log(e.target.value)
                if (e.target.value.length < 6) setError('short password')
                else {
                  if (e.target.value !== confirmPassword) {
                    //console.log(e.target.value, confirmPassword)
                    setError('passwords do not match.')
                  }
                  else {
                    setError('')
                  }
                }
                setPassword(e.target.value)
              }} />
              <br />
            </div>
            <label className="App-label">Confirm Password</label> <br />
            <input type="password" className="App-input" value={confirmPassword} onChange={(e) => {
              //console.log('event ', e.target.value)
              //console.log('confirmpassword', confirmPassword)
              if (password.length < 6) setError('short password')
              else {
                if (password !== e.target.value) {
                  setError('passwords do not match.')
                  //console.log(password, e.target.value)
                }
                else { setError('') }
              }
              setConfirmPassword(e.target.value)
            }
            } />
            <div style={{ color: '#a32121', marginTop: 20, fontSize: 14 }}>{error}</div>
            {/* {check && ((password !== confirmPassword) || password.length<6) ?password.length<6?
            {/* {error && (<div>fdsfsf<div/>)} */}
            <div style={{ marginTop: 40 }}>
              {/* <input type="button" style={{ borderRadius: 0 }} className="App-button" value="Reset Password" onClick={async () => { */}
              <button className="button" onClick={async () => {
                // console.log('token ')
                // console.log('token ',token)
                //console.log('password ',password)
                setLoading(true)
                 const response =await fetch(`${process.env.REACT_APP_MASTERHOST}/api/web/resetpasswordtoken`, {
                // const response = await fetch(`http://localhost:3000/resetpasswordtoken`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  // mode: 'cors',
                  body: JSON.stringify({ password, token })
                }).then((res) => res.text())
                  .then((json) => {
                    //console.log(json)
                    // console.log('111111111111111111111111111111111')
                    setLoading(false)
                    // history.push('/thanks')
                    return json
                  })
                  .catch((e) => {
                    // console.log(e)
                    // console.log('222222222222222222222222222222222')
                    setLoading(false)

                    // history.push('/send')
                  })
                // console.log('response ',response)
                switch (response) {
                  case 'saved':
                    {
                      setSuccess(true)
                      // history.push('/thanks')
                      return
                    }
                  case "failed":
                    {
                      // setSuccess(true)
                      history.push('/send')
                      return
                    }
                  default:
                    // console.log('default')
                    // setSuccess(true)
                    history.push('/send')
                    return
                }
                //   console.log( window.location.search.substring(1))
              }} disabled={error || password.length === 0 ? true : false} >Reset</button>
            </div>
            {/* <p style={{color:'#fff',fontSize:20}}> {process.env.REACT_APP_osama}fsdfsdfsd</p> */}
          </div>
        </form>
      </div>

  )
}

    // {/* <button onClick={() => {history.push('/Thanks')}}>go to about </button>
    // Reset password Screen */}
