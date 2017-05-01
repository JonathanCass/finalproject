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
          This is the Home Page
        <Link to={'/CreateUser/'} style={styles.link}>Create User</Link>
        <Link to={'/User/'} style={styles.link}>User</Link>
        <Link to={'/ParkView/'} style={styles.link}>ParkView</Link>
      </div>
    )
  }
}

export default Home