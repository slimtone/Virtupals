import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome } from './components'
import EditAccount from './components/editAccount';
import {me, fetchQuestions, fetchMessages, fetchChannels} from './store'
import Quiz from './components/quiz';
import Matches from './components/matches';
import NewChannelEntry from './components/newChannelEntry';
import MessagesList from './components/messagesList';


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {
          isLoggedIn &&
          <Switch>
          {/* Routes placed here are only available after logging in */}
          <Route path="/myAccount" component={UserHome} />
          <Route path="/editAccount" component={EditAccount} />
          <Route path="/myMatches" component={Matches} />
          <Route path="/new-channel" component={NewChannelEntry} />
          <Route path="/channels/:channelId" component={MessagesList} />
          <Route exact path="/quiz" component={Quiz} />
            </Switch>
        }
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    questions: state.questions
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchQuestions());
      dispatch(fetchMessages());
      dispatch(fetchChannels());
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
