import React from 'react'
import styles from './ParkView.styles'

class ParkView extends React.Component {
//   constructor(props) {
 
//    super(props)
//   }

  render() {
    return (
      <div style={styles.div}>
        <h2>Type Of Play</h2>
      <div>
        <input type='radio'/>
        <label for='competitive'>Competitive</label>
      </div>
      <div style={styles.radio}>
        <input type='radio'/>
        <label for='leisurely'>Leisurely</label>
      </div>
      <div style={styles.line}></div>
      </div>
    )
  }
}

export default ParkView