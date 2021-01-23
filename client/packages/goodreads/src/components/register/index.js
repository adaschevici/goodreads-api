import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'
import { doRegister } from './actions'

const { Register, NavBar } = components

class DashboardRegister extends Component {
  static defaultProps = {
    onRegister: () => {},
  }
  static propTypes = {
    onRegister: PropTypes.func.isRequired,
  }

  handleRegister = (fullName, username, password, rePassword) => {
    const { dispatch } = this.props
    return dispatch(doRegister(fullName, username, password, rePassword))
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Register onRegister={this.handleRegister} />
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  const { isLoading, error, success } = state.register
  return { isLoading, error, success }
}

export default connect(mapStateToProps)(DashboardRegister)
