import React from 'react'
import styles from './User.styles.js'

class UserAvailability extends React.Component {
    constructor() {
        super()
        this.state = {
            area:'',day:'',from:0,to:0,fromAmPm:'',toAmPm:''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div style={styles.availabilityContainer}>
        <div style={styles.availabilityHeader}>User Availability Settings</div>
        
        <div style={styles.left}>
            <select name="area" style={styles.select} onChange={this.handleChange} value={this.state.area}>
                <option value="">Select Area of City</option>
                <option value="1">Northwest</option>
                <option value="2">Southwest</option>
                <option value="3">Northeast</option>
                <option value="4">Southeast</option>
                <option value="5">Surrounding</option>
            </select>
            <select name="day" style={styles.select} onChange={this.handleChange} value={this.state.day}>
                <option value="">Select day of week</option>
                <option value="private">Monday</option>
                <option value="friends">Tuesday</option>
                <option value="private">Wednesday</option>
                <option value="friends">Thursday</option>
                <option value="private">Friday</option>
                <option value="friends">Saturday</option>
                <option value="private">Sunday</option>
            </select>
        </div>

        <div style={styles.right}>
            <select name="from" style={styles.time} onChange={this.handleChange} value={this.state.from}>
                <option value={0}>From</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
            </select>
            <select name="fromAmPm" style={styles.AmPm} onChange={this.handleChange} value={this.state.fromAmPm}>
                <option value="">AM/PM</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
            <select name="to" style={styles.time} onChange={this.handleChange} value={this.state.to}>
                <option value={0}>To</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
            </select>
            <select name="toAmPm" style={styles.AmPm} onChange={this.handleChange} value={this.state.toAmPm}>
                <option value="">AM/PM</option>
                <option value="private">AM</option>
                <option value="friends">PM</option>
            </select>
        </div>

      </div>
    )
  }
}

export default UserAvailability