import React from 'react'
import '../assets/home.css'
import Carousel from 'nuka-carousel'
import {Link} from 'react-router-dom'


class Home extends React.Component {
  constructor(props) { 
   super(props)
   this.state = {
     login:''
   }
}

handleSubmit = (e) => {  // FINISH HANDLE FUNCTIONS
  e.preventDefault()

}
handleClick = (e) => {
  e.preventDefault()
  console.log('click')
}
handleChange = (e) => {
  this.setState({
    [e.target.name]:e.target.value
    
  })
}

  render() {
    return (
      <div className="beginningContainer">
        <img alt='' id="logo" src={require('../assets/Logo.png')}/>
        <form onSubmit={this.handleSubmit} className="user">
          <button onClick={this.handleClick}>Sign Up</button>
          <input type='text' onChange={this.handleChange} name='login' placeholder='Login' />
        </form>
        <h4>Social Media Icons</h4>
        <div className="topLine"></div>
        <section className="carouselContainer">
          <Carousel style={{height:380}}>
              <img alt='' src="https://static.pexels.com/photos/305244/pexels-photo-305244.jpeg"/>
              <img alt='' src="https://static.pexels.com/photos/24306/pexels-photo-24306.jpg"/>
              <img alt='' src="https://static.pexels.com/photos/386024/pexels-photo-386024.jpeg"/>
              <img alt='' src="https://images.pexels.com/photos/798/bench-people-smartphone-sun.jpg?w=940&amp;h=650&amp;auto=compress&amp;cs=tinysrgb"/>
              <img alt='' src="http://latina.lu/wp-content/uploads/2017/04/tenis-003.jpg"/>
          </Carousel>  
       </section>
      
       <h1 className="happening">What's Happening In Your Area</h1>
          <ul className="matches">
            <li id="person">Match</li> 
            <li id="person">Match</li>
            <li id="person">Match</li>
            <li id="person">Match</li>
          </ul>
          {/*{this.state.dataname}*/}
      <div>
        Home Page
        <Link to={'/CreateUser/'} style={styles.link}>Create User</Link>
        <Link to={'/UserProfile/'} style={styles.link}>UserProfile</Link>
        <Link to={'/UserHomePage/'} style={styles.link}>UserHomePage</Link>
        <Link to={'/ParkView/'} style={styles.link}>ParkView</Link>
      </div>
      </div> //end of container
    )
  }
}

export default Home