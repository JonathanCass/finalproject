import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import UserProfile from './UserProfile'
import CreateUser from './CreateUser'
import ParkView from './ParkView'
import Home from './Home'
import UserHomePage from './UserHomePage'



class App extends Component {
  constructor() {
    super()
    this.state = {
      login: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('here')
  }
  handleClick = (e) => {
    e.preventDefault()
    console.log('clicked')
    // this.props.history.push('/CreateUser/')
  }
  handleChange = (e) => {
    console.log('changed')
    this.setState =({
      [e.target.name]:e.target.value
      
    })
 }
  render() {
    return (
        <Router>
          <div>	
            <img alt='' id="logo" src={require('../assets/Logo.png')}/>
            <form onSubmit={this.handleSubmit} className="user">
              <button onClick={this.handleClick}>Sign Up</button>
              <input type='text' onChange={this.handleChange} name='login' placeholder='Login' />
            </form>
          <h4>Social Media Icons</h4>
          <div className="links">
            <Link to={'/'} id='home'>Home</Link>
            <Link to={'/CreateUser/'} id='createUser'>Create User</Link>
            <Link to={'/UserProfile/'} id='userProfile'>UserProfile</Link>
            <Link to={'/UserHomePage/'} id='userHomePage'>UserHomePage</Link>
            <Link to={'/ParkView/'} id='parkView'>ParkView</Link>
          </div>
        
                <Route exact={true} path='/' component={Home} /> {/*Greeting Page with Logo and Login / Sign Up*/}
                <Route path='/UserProfile/' component={UserProfile} />        {/*Where Availability results are displayed, User info and availability settings are made here as well*/}
                <Route path='/CreateUser/' component={CreateUser} />      {/*Initial Profile Construction*/}
                <Route path='/ParkView' component={ParkView} />   {/*Create Event Listings here*/}
                <Route path='/UserHomePage' component={UserHomePage} /> 
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