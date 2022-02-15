import React from 'react'
import { useHistory } from "react-router-dom"
export default function Apps() {
    let history = useHistory()
    return (
        // <div class="row">
        //     <div class="col-sm-4">
        //         <div class="card">
        //             <div class="card-header">Free</div>
        //             <div class="card-body">
        //                 <img src="mansour.png" alt="Mansour" style={{ width: 150, height: 150, marginBottom: 10 }} />
        //                 {/* <h5 class ="card-title">Mansour</h5> */}
        //                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //                 <a href="#" class="btn btn-primary">Go somewhere</a>
        //             </div>
        //         </div>
        //     </div>
        //     <div class="col-sm-4">
        //         <div class="card">
        //             <div class="card-header">Mansour</div>
        //             <div class="card-body">
        //                 <img src="mansour_market.png" style={{ width: 150, height: 150, marginBottom: 10 }} alt="Mansour Market" />
        //                 <h5 class="card-title">Mansour for Businesses</h5>
        //                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //                 <a href="#" class="btn btn-primary">Go somewhere</a>
        //             </div>
        //         </div>
        //     </div>
        //     <div class="col-sm-4">
        //         <div class="card">
        //             <div class="card-header">Mansour</div>
        //             <div class="card-body">
        //                 <img src="mansour_market.png" style={{ width: 150, height: 150, marginBottom: 10 }} alt="Mansour Market" />
        //                 <h5 class="card-title">Mansour for Businesses</h5>
        //                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //                 <a href="#" class="btn btn-primary">Go somewhere</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div class="row" style={{marginTop:100,marginBottom:50}}>
            <div class="col-sm-6">
                <div class="card mb-6 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Free</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/yr</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            {/* <li>10 users included</li> */}
                            {/* <li>2 GB of storage</li> */}
                            <li>Full Access to Mansour for Businessess App</li>
                            <li>One year free trial</li>
                        </ul>
                        {/* <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button> */}
                    </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="card mb-6 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Basic</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$14.50<small class="text-muted fw-light">/mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Full Access to Mansour for Businesses App</li>
                            <li>In-App Purchese</li>
                            {/* <li>Priority email support</li>
                            <li>Help center access</li> */}
                        </ul>
                        {/* <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button> */}
                    </div>
                </div>
            </div>
        </div>


    )
}
