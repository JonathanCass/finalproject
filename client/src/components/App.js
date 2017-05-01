import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import User from './User'
import CreateUser from './CreateUser'
import ParkView from './ParkView'
import Home from './Home'


class App extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }
  render() {
    return (
    	<Router>
		    <div>	
		      	  <Route exact={true} path='/' component={Home} /> {/*Greeting Page with Logo and Login / Sign Up*/}
							<Route path='/User/' component={User} />        {/*Where Availability results are displayed*/}
            	<Route path='/CreateUser/' component={CreateUser} />      {/*Where Availability Is Set*/}
          		<Route path='/ParkView' component={ParkView} />   {/*Create Event Listings here*/}
		    </div>
	  </Router>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(App)