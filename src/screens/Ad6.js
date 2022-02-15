import React,{useEffect} from 'react'

export default function Apps() {
    useEffect(() => {
        process.env.REACT_APP_AD6?window.location.href = process.env.REACT_APP_AD6:null
        // window.location.href = "https://google.com";  
    }, []);
    return (
        
        process.env.REACT_APP_AD6?<div></div>:<div class="row" style={{marginBottom:75,marginTop:75}}>
        {/* <div class="col-xs-6"> */}
        <div class="col-sm-6">
            <div class="card mb-4 rounded-3 shadow-sm">
                {/* <div class="card-header">Mansour</div> */}
                <div class="card-header py-3">Mansour for Users</div>
                <div class="card-body">
                    <img src="mansour.png" alt="Mansour" style={{ width: 150, height: 150, marginBottom: 10 }} />
                    {/* <h5 class ="card-title">Mansour</h5> */}
                    {/* <h5 class="card-title">Mansour for Users</h5> */}
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {/* <p class="card-text">Mansour for Users.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}

                    <div class="d-flex" style={{ alignItems: 'center',marginBottom:10, justifyContent: 'flex-start' }}>
                        <a href="https://play.google.com/store/apps/details?id=com.mansourclient">
                            {/* <img src="go.png" className="App-getit App-go" style={{width:"18em",height:"6.96em"}}/> */}
                            <img  alt="" src="256x256-android.png" class="App-getit2" />
                            {/* <img src="go.png" class="App-getit" /> */}
                        </a> 
                        {/* <button>download now</button> */}
                    </div>
                    <div class="d-flex" style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                        <a href="https://apps.apple.com/us/app/mansour/id1589666276#?platform=iphone">
                            {/* <img src="go.png" className="App-getit App-go" style={{width:"18em",height:"6.96em"}}/> */}
                            <img  alt="" src="256x256-ios.png" class="App-getit2" />
                            {/* <img src="go.png" class="App-getit" /> */}
                        </a> 
                        {/* <button>download now</button> */}
                    </div>
                    
                </div>
            </div>
        </div>
        {/* <div class="col-xs-6"> */}
        <div class="col-sm-6">
            <div class="card mb-4 rounded-3 shadow-sm">
                {/* <div class="card-header">Mansour Market</div> */}
                <div class="card-header py-3">Mansour for Businesses</div>
                <div class="card-body">
                    <img  src="mansour_market.png" style={{ width: 150, height: 150, marginBottom: 10 }} alt="Mansour for businesses" />
                    {/* <h5 class="card-title">Mansour for Businesses</h5> */}
                    {/* <p class="card-text">Mansour for Businesses.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}


                    <div class="d-flex" style={{ alignItems: 'center', justifyContent: 'flex-start',marginBottom:10 }}>
                        <a href="https://play.google.com/store/apps/details?id=com.masourmarket">
                            {/* <img src="go.png" className="App-getit App-go" style={{width:"18em",height:"6.96em"}}/> */}
                            <img alt="" src="256x256-android.png" class="App-getit2" />
                            {/* <img src="go.png" class="App-getit" /> */}
                        </a>
                        {/* <button>download now</button> */}
                    </div>
                    <div class="d-flex" style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                        <a href="https://apps.apple.com/us/app/mansour-business/id1590509030">
                            {/* <img src="go.png" className="App-getit App-go" style={{width:"18em",height:"6.96em"}}/> */}
                            <img alt="" src="256x256-ios.png" class="App-getit2" />
                            {/* <img src="go.png" class="App-getit" /> */}
                        </a>
                        {/* <button>download now</button> */}
                    </div>


                </div>
            </div>
        </div>
    </div>
        
    )
}
