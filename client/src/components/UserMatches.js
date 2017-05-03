import React from 'react'

const styles={
    matchesContainer:{
        width: 629,
        border: 'solid 1px black',
        borderWidth: '1px 0 0 1px',
        marginLeft: 10,
        height: 238,
        display: 'flex',
        flexWrap: 'wrap',
        background: '#53BE16',
    },
    matchBox:{
        width: 157,
        height: 237,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0 ',
        background: 'white'
    },
    matchAvatar:{
        width:156,
        height:156,
        background: 'pink',
        border: 'solid 1px black',
        borderWidth: '0 0 1px 0',
    },
    matchLine:{
        width:156,
        height: 40,
        fontSize: 14,
        border: 'solid 1px black',
        borderWidth: '1px 0 1px 0',
        lineHeight: '40px',
        textAlign: 'center',
        background: 'purple',
        color: 'white'
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
            <div style={styles.matchAvatar}>Avatar</div>
            <div style={styles.matchLine}>Jeffrey Cartwright</div>
            <div style={styles.matchLine}>Northwest Las Vegas</div>
        </div>
        <div style={styles.matchBox}>
            <div style={styles.matchAvatar}>Avatar</div>
            <div style={styles.matchLine}>Debrah Scott</div>
            <div style={styles.matchLine}>Southeest Las Vegas</div>
        </div><div style={styles.matchBox}>
            <div style={styles.matchAvatar}>Avatar</div>
            <div style={styles.matchLine}>Peter Griffin</div>
            <div style={styles.matchLine}>Surrounding Area</div>
        </div><div style={styles.matchBox}>
            <div style={styles.matchAvatar}>Avatar</div>
            <div style={styles.matchLine}>Juice Box</div>
            <div style={styles.matchLine}>Northeast Las Vegas</div>
        </div>
      </div>
    )
  }
}

export default UserMatches