var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    justifyContent: 'center',
    // alignItems:'center',
    display:"flex",
    paddingBottom:"0px",
    backgroundColor:'#cbd1b3',
    position: "relative",
    left: "0",
    bottom: "0",
    height: "1rem",
    width: "100%",
}

var phantom = {
  display: 'block',
//   fontSize:20,
//   padding: '5px',
//   height: '30px',
//   width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}

export default Footer