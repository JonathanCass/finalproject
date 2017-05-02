import React from 'react'

const styles ={
  top:{
    width: 650,
    height: 420,
    padding: 10,
    background: 'aquamarine'
  },
  topRight:{
    width: 310,
    display: 'inline-block',
    marginLeft: 10
  },
  topLeft:{
    marginTop: '-140px',
    width: 310,
    display: 'inline-block'
  },
  avatar:{
    width: 310,
    height: 200,
    background: 'pink'
  },
  firstName:{
    marginTop: 10,
    width: 310,
    height: 40
  },
  lastName:{
    marginTop: 10,
    width: 310,
    height: 40
  },
  avatarUrl:{
    marginTop: 10,
    width: 310,
    height: 40
  },
  privacy:{
    marginTop: 10,
    width: 310,
    height: 40
  },
  activities:{
    width: 310,
    height: 100,
  },
  bio:{
    marginTop: 10,
    width: 310,
    height: 100,
  },
  hobbies:{
    marginTop: 10,
    width: 310,
    height: 100,
  },
  interests:{
    marginTop: 10,
    width: 310,
    height: 100,
  },
  bottom:{

  }
}

class User extends React.Component {
  constructor() {
    super()
    this.state = {
      avatarUrl:'',firstName:'',lastName:'',privacy:'',bio:'',hobbies:'',interests:'',activities:[]
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
            <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} style={styles.firstName} value={this.state.firstName}></input>
            <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} style={styles.lastName} value={this.state.lastName}></input>
            <input type="text" name="avatarUrl" placeholder="Avatar Url" onChange={this.handleChange} style={styles.firstName} value={this.state.avatarUrl}></input>
            <select style={styles.privacy}>
              <option value="">User Page Privacy Setting</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
              <option value="public">Public</option>
            </select>
           </div>
           <div style={styles.topRight}>
            <textarea style={styles.activities}>User's Activities Info</textarea>
            <textarea style={styles.bio}>Brief Bio</textarea>
            <textarea style={styles.hobbies}>Hobbies</textarea>
            <textarea style={styles.interests}>Interests, Movies, Music, Shows, Books</textarea>
           </div>
          
          <div style={styles.bottom}>
            User Availability Settings
          </div>
        </div>

      </div>
    )
  }
}

export default User