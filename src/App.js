import React, {  useContext, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import logo from './mansourlogo.png';
// import ReactDOM from 'react-dom';
// import PuffLoader from "react-spinners/PuffLoader";
import { FaTwitter } from "react-icons/fa"
import { Context, Provider } from './context/TokenContext'
import { BrowserRouter, Route, Switch, Link, useHistory } from 'react-router-dom'
import ResetPassword from './screens/ResetPassword';
import SendEmail from './screens/SendEmail';
import Thanks from './screens/Thanks';
// import Posts from './screens/Posts';
import Home from './screens/Home';
import Contactus from './screens/Contactus';
import Pricing from './screens/Pricing';
import Apps from './screens/Apps';
import Ad1 from './screens/Ad1';
import Ad2 from './screens/Ad2';
import Ad3 from './screens/Ad3';
import Ad4 from './screens/Ad4';
import Ad5 from './screens/Ad5';
import Ad6 from './screens/Ad6';
import Privacypolicy from './screens/Privacypolicy';
import paypalPayment from './screens/paypalPayment';
import SuccessfulTransaction from './screens/SuccessfulTransaction';
import FailedTransaction from './screens/FailedTransaction';
import './App.css';
// import Footer from './components/FooterPage'
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  // console.log(query)//"app=article&act=news_content&aid=160990"
  var vars = query.split("&");
  console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
    if (pair[0] === variable) { return pair[1]; }
  }
  return (false);
}
function App() {
  let history = useHistory();
  const { addToken } = useContext(Context)
  useEffect(() => {
    let x = getQueryVariable('token')
    console.log('x : ', x)
    addToken(x)
    
    // var query = window.location.search.substring(1);
    // console.log(query)
  }, [])
  return (
    // <div className="container-fluid">
    <div>

      {/* <nav class="navbar navbar-dark bg-dark navbar-expand-lg"> */}

      <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          {/* <div> */}
          {/* <img src="logo192.png" class="nav-item" alt="" width="40rem" height="40rem" /> */}
          <img src="logo.png" alt="" class="nav-item"  width="40" height="40" />
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
            <div class="navbar-nav">
              <Link exact to="/" class="nav-item nav-link .App-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => {
                  history.push("/")
              }}>Home</Link>
              {/* <Link exact to="/pricing" class="nav-item nav-link .App-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => {
                  history.push("/pricing")
              }}>Pricing</Link> */}
              <Link exact to="/apps" class="nav-item nav-link .App-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => {
                  history.push("/apps")
              }}>Apps</Link>
              <Link exact to="/contact" class="nav-item nav-link .App-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => {
                  history.push("/contact")
              }}>Contact Us</Link>
              <Link exact to="/privacy" class="nav-item nav-link .App-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => {
                  history.push("/privacy")
              }}>Privacy</Link>
              {/* <Link exact to="/send" class="nav-item nav-link .App-link">Send</Link> */}
              {/* <a href="#" class="nav-item nav-link">Home</a>
              <a href="#" class="nav-item nav-link">Contact us</a>
              <a href="#" class="nav-item nav-link">Privacy policy</a>
              <a href="#" class="nav-item nav-link">Home</a> */}
            </div>
          </div>
          {/* </div> */}
        </div>
      </nav>
      {/* <h1>Shop your city within a few minutes</h1> */}
      {/* <div class="container-fluid d-flex  justify-content-center align-items-center  App-fill"> */}


      {/* <div class="container-fluid d-flex  justify-content-start align-items-center  App-fill" style={{backgroundColor:'#dedede'}} > */}
      <div class="container-fluid d-flex  justify-content-start align-items-center  App-fill" style={{ backgroundColor: '#dedede' }} >
        <div class="container-fluid App-container" style={{ backgroundColor: '#dedede' }}>
          {/* <div class="container-fluid" style={{backgroundColor:'#'}}> */}
          {/* <div class="container d-flex    App-fill" style={{backgroundColor:'#dedede'}} > */}
          {/* <div class="App-fill" > */}


          {/* <div class="container-fluid d-flex  justify-content-center align-items-center  App-fill" style={{backgroundColor:'#c7c7c7'}} > */}
          {/* <div class="container-fluid d-flex  justify-content-evenly align-items-center  App-fill" style={{backgroundColor:'#f1e3b1'}} > */}

          {/* </div> */}
          {/* <BrowserRouter> */}
          {/* <div>fsdfsfd</div>
    <Link to='/reset'>go to send email</Link>
    <button onClick={() => {history.push('/Thanks')}}>click me to go to thanks</button> */}
          <Switch>
            <Route path='/paypalpayment' exact component={paypalPayment} />
            <Route path='/' exact component={Home} />
            {/* <Route path='/google' exact component={() => {
              window.location.replace('https://google.com');
              return null;
            }} /> */}
            <Route path='/pricing' exact component={Pricing} />
            <Route path='/apps' exact component={Apps} />
            <Route path='/ad1' exact component={Ad1} />
            <Route path='/ad2' exact component={Ad2} />
            <Route path='/ad3' exact component={Ad3} />
            <Route path='/ad4' exact component={Ad4} />
            <Route path='/ad5' exact component={Ad5} />
            <Route path='/ad6' exact component={Ad6} />
            <Route path='/contact' exact component={Contactus} />
            <Route path='/privacy' exact component={Privacypolicy} />
            <Route path='/reset' exact component={ResetPassword} />
            <Route path='/send' exact component={SendEmail} />
            <Route path='/thanks' exact component={Thanks} />
            <Route path='/successfulpayment' exact component={SuccessfulTransaction} />
            <Route path='/failedpayment' exact component={FailedTransaction} />
            {/* <Route path='/posts/:id' component={Posts} /> */}
          </Switch>
          {/* </BrowserRouter> */}
        </div>
      </div>
      {/* <div class="collapse " id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>

        </div>
      </div> */}
      {/* <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand nav"  href="#">
            <img src="logo192.png" alt="" width="50" height="50" />
          </a>
        </div>
      </nav> */}
      {/* <nav class="navbar fixed-bottom navbar-light" style={{backgroundColor:'#1a566c'}}> */}
      <nav class="navbar fixed-bottom navbar-light bg-dark">
        <div class="container-fluid d-flex">
          <div class="col" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* <a class="nav-item d-flex justify-content-center">Fixed bottom</a> */}
            {/* <text class="nav-item d-flex justify-content-center App-footer">© 2021 Mansour Technology | All Rights Reserved.</text> */}
            <text class="nav-item d-flex justify-content-center App-footer">© 2021 Mansour Technology 470 Noor Ave S San Francisco, CA 94080</text>
            {/* <div style={{color:'white'}}>fdsfsdf</text> */}
            <a href="https://twitter.com/mansour76813891">
              <FaTwitter color="#979a9a" />
            </a>
            {/* <text class="nav-item d-flex justify-content-center App-footer">© 2021 Mansour Technology 470 Noor Ave S San Francisco, CA 94080</text> */}
          </div>
          {/* <a class="navbar-brand" href="#">Fixed bottom</a> */}
        </div>
      </nav>

    </div>
  );
}
export default () => {
  return (
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
};
// export default Aparp;
