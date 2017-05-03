import React from 'react'
import UsersEvents from './UsersEvents'
import UserMatches from './UserMatches'
import Friends from './Friends'

const styles={
    userHomeContainer:{
        width: 1300,
        background: 'linear-gradient( to bottom right, #56CCF2 , #2F80ED )'
    },
    header:{
        width: 650,
        fontSize: 32,
        color: '#FFFF00',
        textAlign: 'center',
        height: 40,
        paddingTop: 10,
        marginBottom: 20
    },
    userMain:{
        width: 650,
        padding: 10,
        display: 'flex'
    },
    avatar:{
        width: 200,
        height: 200,
        background: 'white',
        border: '1px solid black',
        borderRadius: 3,
        display: 'inline-block'
    },
    nextBlock:{
        width: 430,
        display: 'inline-block',
        padding: 10,
        marginLeft: 10
    },
    nextLabel:{ 
        display: 'flex',
        justifyContent: 'space-between', 
        width: 413,
        height: 50,
        fontSize: 26,
        color: '#d50000',
        textAlign: 'center',
        marginBottom: 10,
        paddingTop: 5
    },
    arrowButton:{
        height:40,
        width:40,
        borderRadius: 5,
        background: "#D50000",
    },
    nextGrid:{
        border: 'solid 1px black',
        borderWidth: '1px 0 0 1px',
        width: 413,
        height: 120,
    },
    gridEntry:{
        height: 40,
        width: 206,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '42px',
        color: 'white',
        background: '#53BE16'
    },
    gridWith:{
        height: 40,
        width: 412,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '42px',
        color: 'white',
        background: '#53BE16'
    },
    gridHeader:{
        height: 40,
        paddingTop: 10,
        width: 630,
        fontSize: 32,
        color: '#FFFF00',
        textAlign: 'center',
        display: 'block',
        marginBottom: 10 
    },
}

class UserHomePage extends React.Component {
//   constructor(props) {
 
//    super(props)
//   }

  render() {
    return (
      <div style={styles.userHomeContainer}>
        <div style={styles.header}>Welcome to Go Vegas! UserName</div>
        
        <div style={styles.userMain}>
            <div style={styles.avatar}>Avatar</div>
            <div style={styles.nextBlock}>    
                <div style={styles.nextLabel}><button style={styles.arrowButton}></button><span>Upcoming Activity</span><button style={styles.arrowButton}></button></div>
                <div style={styles.nextGrid}>
                    <div style={styles.gridEntry}>Date</div>
                    <div style={styles.gridEntry}>Location</div>
                    <div style={styles.gridEntry}>Hour AM/PM</div>
                    <div style={styles.gridEntry}>Activity</div>
                    <div style={styles.gridWith}>Partner (User Profile Link)</div>
                </div>
            </div>
        </div>
        <div style={styles.gridHeader}>User's Created Events</div>
        <UsersEvents/>
        <div style={styles.gridHeader}>User's Matches</div>
        <UserMatches/>
        <Friends/>
      </div>
    )
  }
}

export default UserHomePage