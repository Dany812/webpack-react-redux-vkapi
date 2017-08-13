import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import * as userActions from '../actions/UserActions'
import * as friendsAction from '../actions/FriendsActions'

class App extends Component {

  render() {
    const { user,friends } = this.props
    const { handleLogin, checkAuth, logout } = this.props.userActions
    const { friendLoad } = this.props.friendsAction
    
    return <div className='row'>
       <User name={user.name} friends={friends.friend} friendLoad={friendLoad} logout={logout} checkAuth={checkAuth} handleLogin={handleLogin} error={user.error} />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    friends: state.friends
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    friendsAction: bindActionCreators(friendsAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)