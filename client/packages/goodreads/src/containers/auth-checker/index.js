import { Component } from 'react'
import { checkAuth, checkRealApi } from './actions'
import { connect } from 'react-redux'

class AuthCheck extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    checkRealApi()
    return dispatch(checkAuth())
  }

  componentDidUpdate() {
    const { dispatch } = this.props
    checkRealApi()
    dispatch(checkAuth())
  }
  render() {
    const { children } = this.props
    return children
  }
}

const mapStateToProps = ({ username }) => {
  return { username }
}

export default connect(mapStateToProps)(AuthCheck)
