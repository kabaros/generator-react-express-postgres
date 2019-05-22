import React, { Component } from 'react'
import * as api from '../../helpers/api'

class Home extends Component {
  state = {
    status: []
  }
  componentDidMount () {
    api.getStatus().then(status => {
      this.setState({
        status
      })
    })
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to <%= title %></h1>
        </header>
        <div className='App-intro'>
          This is fetched from API /status: {this.state.status.map(({ status }) => {
            return <span key={status}>{status}</span>
          })}
        </div>
      </div>
    )
  }
}

export default Home
