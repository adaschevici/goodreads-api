import React, { Component } from 'react'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'
import './index.css'
import BookList from '../book-list'

const { NavBar } = components

class App extends Component {
  render() {
    const { authenticated, username } = this.props
    return (
      <div className="App">
        <NavBar authenticated={authenticated} username={username} />
        <main style={{ height: '70vh' }}>
          <BookList />
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { username, error: authError } = state.auth
  const authenticated = authError === null
  return {
    username,
    authenticated,
  }
}
export default connect(mapStateToProps)(App)
