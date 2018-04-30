import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {firstName} = props
  console.log(props);

  return (
    <div>
      <h2>Welcome, {firstName}</h2>
      <h3>You have matches waiting for you. Go talk to them, don't be shy! You got this!</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    firstName: state.user.firstName
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */

