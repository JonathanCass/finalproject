import React from 'react'

const styles={
    matchesContainer:{
        width: 626,
        border: 'solid 1px black',
        borderWidth: '1px 0 0 1px',
        marginLeft: 12,
        height: 300,
        display: 'flex',
        flexWrap: 'wrap',
        background: '#53BE16',
    },
    matchBox:{
        width: 125,
        height: 300,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0 ',
        background: 'white'
    },
    matchAvatar:{
        width:124,
        height:124,
        background: 'pink'
    },
    matchLine:{
        width:124,
        height: 37,
        fontSize: 14,
        border: 'solid 1px black',
        borderWidth: '1px 0 0 0',
        lineHeight: '37px',
        textAlign: 'center'
    }
}
class UserMatches extends React.Component {
//   constructor(props) {
 
//    super(props)
//   }

  render() {
    return (
      <div style={styles.matchesContainer}>
        <div style={styles.matchBox}>
            <div style={styles.matchAvatar}></div>
            <div style={styles.matchLine}>Jeffrey Cartwright</div>
            <div style={styles.matchLine}>Northwest Las Vegas</div>
        </div>
        <div style={styles.matchBox}></div>
        <div style={styles.matchBox}></div>
        <div style={styles.matchBox}></div>
        <div style={styles.matchBox}></div>
      </div>
    )
  }
}

export default UserMatches