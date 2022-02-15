import React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import logo2 from '../images/invalid.png';
export default function Thanks() {
    const { height, width } = useWindowDimensions()
    return (
        <>
            <div style={{flexDirection:'column', display: 'flex', alignItems: 'center', justifyContent: 'center', width: width - 50, height: height - 50 }}>
                {/* Thanks Screen */}
                <img src={logo2} alt="Success" style={{ width: 150,marginBottom:20 }} />
                {/* <div style={{marginBottom:10}}>
                    <label style={{ color: '#b6b6b6', fontSize: 20 }}>Password Changed!</label>
                </div> */}
                <div>
                {/* <label style={{ color: '#b6b6b6', fontSize: 14 }}>Your password has been changed successfully.</label> */}
                <label style={{ color: '#e20000', fontSize: 16 }}>Payment failed. Try again</label>
                </div>
            </div>
        </>
    )
}
