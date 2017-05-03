import React from 'react'

const styles = {
    UAGridContainer:{
        width: 650,
        padding: 10,
        background: '#53BE16'
    },
    gridLabel:{
        width: 151,
        height: 38,
        color: 'white',
        fontSize: 20,
        display: 'inline-block',
        lineHeight: '40px',
        textAlign: 'center'
    },
    grid:{
        width:630,
        border: 'solid 1px black',
        borderWidth: '1px 0 0 1px',
        display: 'flex'
    },
    gridBox:{
        width: 148,
        height: 40,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        background: '#F2F2F2',
        lineHeight: '42px',
        textAlign: 'center'
    },
    removeEntry:{
        width: 40,
        height: 40,
        border: 'solid 1px black',
        borderWidth: '0 1px 1px 0',
        display: 'inline-block',
        background: '#1DA2CF',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
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
class UserAvailabilityGrid extends React.Component {
//   constructor(props) {
 
//    super(props)
//   }

  render() {
    return (
      <div style={styles.UAGridContainer}>
        <div style={styles.gridHeader}>Currently Available For</div>  
        <div style={styles.gridLabel}>City Section</div>
        <div style={styles.gridLabel}>Day of Week</div>
        <div style={styles.gridLabel}>From</div>
        <div style={styles.gridLabel}>To</div>
       
        <div style={styles.grid}>
            <div style={styles.gridBox}>Northwest Las Vegas</div>
            <div style={styles.gridBox}>Monday</div>
            <div style={styles.gridBox}>10 AM</div>
            <div style={styles.gridBox}>1 PM</div>
            <div style={styles.removeEntry}>-</div>
        </div>

      </div>
    )
  }
}

export default UserAvailabilityGrid