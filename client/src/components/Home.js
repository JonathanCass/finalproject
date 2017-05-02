import React from 'react'
import {Link} from 'react-router-dom'

const styles={
    link:{
        margin: 10
    }
}
class Home extends React.Component {
//   constructor(props) {
 
//    super(props)
//   }

  render() {
    return (
      <div>
        Home Page
        <Link to={'/CreateUser/'} style={styles.link}>Create User</Link>
        <Link to={'/UserProfile/'} style={styles.link}>UserProfile</Link>
        <Link to={'/UserHomePage/'} style={styles.link}>UserHomePage</Link>
        <Link to={'/ParkView/'} style={styles.link}>ParkView</Link>
      </div>
    )
  }
}

export default Home