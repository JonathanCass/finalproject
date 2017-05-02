import React from 'react'

const styles ={
  top:{
    width: 650,
    height: '100%',
    padding: 10,
    background: '#53BE16',
    display: 'flex',
    border: 'solid 1px #B3BACE'
  },
  topRight:{
    width: 310,
    display: 'inline-block',
    marginLeft: 10
  },
  topLeft:{
    width: 310,
    display: 'inline-block'
  },
  avatar:{
    width: 310,
    height: 300,
    background: 'white',
    border: 'solid 1px black'
  },
  lineInput:{
    marginTop: 10,
    width: 310,
    height: 40,
    border: 'solid 1px black',
    textIndent: 5,
    borderRadius: 3
  },
  ageInput:{
    marginTop: 10,
    width: 150,
    height: 40,
    border: 'solid 1px black',
    textIndent: 5,
    borderRadius: 3
  },
  gender:{
    marginTop: 10,
    marginLeft: 10,
    width: 150,
    height: 40,
    border: 'solid 1px black'
  },
  privacy:{
    marginTop: 10,
    width: 310,
    height: 38,
    border: 'solid 1px black'
  },
  activities:{
    width: 310,
    height: 132,
    border: 'solid 1px black',
    borderRadius: 3,
    overflow: 'hidden',
  },
  activitiesTextArea:{
    width: 308,
    height: 102,
    border: 'solid 1px black',
    borderWidth: '0 0 1px 0'
  },
  infoBlock:{
    marginTop: 10,
    width: 310,
    height: 112,
    border: 'solid 1px black',
    overflow: 'hidden',
    borderRadius: 3
  },
  textArea:{
    width:308,
    height: 82,
    border: 'solid 1px black',
    borderWidth: '0 0 1px 0'
  },
  buttonBar:{
    marginTop: -6,
    display: 'flex',
    justifyContent: 'space-between',
    height:30,
    width:308,
    background: '#F2F2F2',
    lineHeight: '32px',
    textIndent: 6
  },
  editInfo:{
    height: 20,
    width: 60,
    background: '#1DA2CF',
    color: 'white',
    marginTop: 6,
    marginRight: 6
  },
  bottom:{

  }
}

class User extends React.Component {
  constructor() {
    super()
    this.state = {
      avatarUrl:'',firstName:'',lastName:'',privacy:'',bio:'',hobbies:'',interests:'',email:'',activities:[],age: 0,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        
        <div style={styles.top}>
          <div style={styles.topLeft}>
            <div style={styles.avatar}>AVATAR PICTURE</div>
            <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} style={styles.lineInput} value={this.state.firstName}></input>
            <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} style={styles.lineInput} value={this.state.lastName}></input>
            <input type="text" name="avatarUrl" placeholder="Avatar Url" onChange={this.handleChange} style={styles.lineInput} value={this.state.avatarUrl}></input>
            <input type="email" name="email" placeholder="Email" onChange={this.handleChange} style={styles.lineInput} value={this.state.avatarUrl}></input>
            <input type="text" name="age" placeholder="Age" onChange={this.handleChange} style={styles.ageInput} value={this.state.avatarUrl}></input>
            <select style={styles.gender}>
              <option value="">Select Gender</option>
              <option value="private">Male</option>
              <option value="friends">Female</option>
            </select>
            <select style={styles.privacy}>
              <option value="">User Page Privacy Setting</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
              <option value="public">Public</option>
            </select>
           </div>
           <div style={styles.topRight}>
            <div style={styles.activities}>
              <textarea style={styles.activitiesTextArea}></textarea>
              <div style={styles.buttonBar}><span>User's Activities Info</span><button style={styles.editInfo}>Edit</button></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea}></textarea>
              <div style={styles.buttonBar}><span>User's Bio</span><button style={styles.editInfo}>Edit</button></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea}></textarea>
              <div style={styles.buttonBar}><span>Hobbies</span><button style={styles.editInfo}>Edit</button></div>
            </div>
            <div style={styles.infoBlock}>
              <textarea style={styles.textArea}>Movies, Music, Shows, Books</textarea>
              <div style={styles.buttonBar}><span>Interests</span><button style={styles.editInfo}>Edit</button></div>
            </div>
           </div>
          
          {/*<div style={styles.bottom}>
            User Availability Settings
          </div>*/}
        </div>

      </div>
    )
  }
}

export default User