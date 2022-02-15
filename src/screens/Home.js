import React, {  useEffect } from 'react'
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
export default function Home({history}) {
    useEffect(() => {
        let x = getQueryVariable('token')
        if (x) {
            history.push(`/reset?token=${x}`)
        }
    }, [])
    return (
        // <div class="container d-flex">
        <div class="row d-flex App-home" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <div class="col-12 col-sm-5  d-flex .App-home2" style={{ alignItems: 'center',  justifyContent: 'space-evenly', backgroundColor: '#dedede' }}>
                {/* <div class=".App-home2" style={{ flex: 1, display: 'flex', alignItems: 'center',justifyContent:'space-evenly', padding: 0,backgroundColor:'yellow',  }}> */}
                {/* <img src="a1.png" class="App-img" style={{ width: '6em', height: '11.16em' }} /><img */}
                <img src="a1.png" alt="" class="App-img" style={{ width: '10%', height: '20%' }} /><img
                    // {/* <img src="a1.png" class="App-img App-si" style={{ width: '6rem', height: '11.16rem' }} /><img */}
                    // {/* <img src="a1.png" class="App-img App-si" style={{ width: '2.5em', height: '3.72em' }} /><img
                    src="a2.png" alt="" class="App-img " style={{ width: '15%', height: '30%' }} /><img
                    src="a3.png" alt="" class="App-img " style={{ width: '20%', height: '40%' }} />
                {/* <img src="a1.png" class="App-img App-si" style={{ width: '2.5em', height: '4.65em' }} /><img */}
                {/* <img src="a1.png" class="App-si"/><img 
                        src="a2.png" class="App-img App-mi"/><img
                        src="a3.png" class="App-img App-li" /> */}
                {/* </div> */}
            </div>

            <div class="col col-sm-2 d-flex flex-column" >
            </div>
            {/* <div class="col-12 col-sm-5 d-flex flex-column" style={{ marginTop: 100, alignItems: 'center', justifyContent: 'center' }}> */}
            <div class="col-12 col-sm-5 d-flex flex-column" style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div >
                    {/* <h1 style={{ fontSize: "1.2em", marginBottom: 20, fontFamily: 'sans-serif',justifyContent:'flex-start'}}>Shop your city within a few minutes. */}
                    {/* <h1 class="txt" style={{ fontSize: "1.8em", marginBottom: 20, fontFamily: 'Roboto', justifyContent: 'flex-start' }}>Shop your city within a few minutes. */}
                    {/* <h1 class="txt" style={{  marginBottom: 20, fontFamily: 'Roboto', justifyContent: 'flex-start' }}>Shop your city within a few minutes. */}
                    <h1 class="txt" style={{  fontFamily: 'Roboto', justifyContent: 'flex-start' }}>Shop your city within a few minutes.
                    </h1>
                </div>
                <div class="d-flex" style={{ alignItems: 'center',marginBottom:20, justifyContent: 'flex-start' }}>
                    <a href="https://play.google.com/store/apps/details?id=com.mansourclient">
                        {/* <img src="go.png" className="App-getit App-go" style={{width:"18em",height:"6.96em"}}/> */}
                        <img alt="" src="256x256-android.png" class="App-getit" />
                        {/* <img src="go.png" className="App-go" /> */}
                    </a>
                    {/* <button>download now</button> */}
                </div>
                <div class="d-flex" style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                    <a href="https://apps.apple.com/us/app/mansour/id1589666276#?platform=iphone">
                        {/* <img src="go.png" className="App-getit App-go" style={{width:"18em",height:"6.96em"}}/> */}
                        <img alt="" src="256x256-ios.png" class="App-getit" />
                        {/* <img src="go.png" className="App-go" /> */}
                    </a>
                    {/* <button>download now</button> */}
                </div>
                {/* <div class="App-indicator" style={{ width: 100, height: 100 }} /> */}
            </div>
        </div>
        // </div>
    )
}
