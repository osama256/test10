import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import logo2 from '../images/success.png';
export default function Thanks() {
    const { height, width } = useWindowDimensions()
    return (
        <>
            <div style={{flexDirection:'column', display: 'flex', alignItems: 'center', justifyContent: 'center', width: width - 50, height: height - 50 }}>
                {/* Thanks Screen */}
                <img src={logo2} alt="Success" style={{ width: 100, height: 100,marginBottom:20 }} />
                {/* <div style={{marginBottom:10}}>
                    <label style={{ color: '#b6b6b6', fontSize: 20 }}>Password Changed!</label>
                </div> */}
                <div>
                {/* <label style={{ color: '#b6b6b6', fontSize: 14 }}>Your password has been changed successfully.</label> */}
                <label style={{ color: '#b6b6b6', fontSize: 16 }}>Thanks! If your username and email address match, you'll get an email with a link to reset your password shortly..</label>
                </div>
            </div>
        </>
    )
}
