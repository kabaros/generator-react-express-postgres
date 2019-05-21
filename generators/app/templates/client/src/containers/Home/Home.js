import React, { Component } from 'react'
import * as api from '../../helpers/api'

class Home extends Component {
  state = {
    users: []
  }
  componentDidMount () {
    api.getUsers().then(users => {
      this.setState({
        users
      })
    })
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to Succulent Crunchie</h1>
        </header>
        <div className='App-intro'>
          {this.state.users.map(({ user_id, name }) => {
            return <p key={user_id}>{name}</p>
          })}
        </div>
        <h2>Upload your photos</h2>

      </div>
    )
  }
}

export default Home
