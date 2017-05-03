import React from 'react'
import {Link} from 'react-router-dom'
import {getUsers} from '../api/messaging'
import {connect} from 'react-redux'

const styles={
    link:{
        margin: 10
    }
}
class Home extends React.Component {
  constructor(props) {
     super(props)
    //   this.state={ 
    // }
  }
  componentWillMount(){
  	getUsers()
  }
  render() {
    //console.log('this.state.props', this.state.props)
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

function mapStateToProps(appState){
	return {users: appState.users}
}

export default connect(mapStateToProps)(Home)