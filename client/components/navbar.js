import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import { Menu, Segment, Dropdown } from 'semantic-ui-react';

const Navbar = ({ handleClick, isLoggedIn, channels }) => (
  <div>
  <Segment inverted>
  {isLoggedIn ? (
    <div>
          {/* The navbar will show these links after you log in */}
          <Menu inverted secondary>
          <Menu.Item as={Link} to="/" name="Home" />
          <Menu.Item as={Link} to ="/quiz" name="Take quiz" />
          <Menu.Menu position="right">
          <Menu.Item as={Link} to = "/myMatches" name="My Matches" />
          <Dropdown text="Settings" className="link item">
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/myAccount">My Account</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/editAccount">Edit My Account</Dropdown.Item>
                </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name="LogOut" onClick={handleClick} />
            </Menu.Menu>
          </Menu>
        </div>
      ) : (
        <div>
        {/* The navbar will show these links before you log in */}
        <Menu inverted secondary>
          <Menu.Item as={Link} to="/" name="Home" />
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/login" name="Login" />
            <Menu.Item as={Link} to="/signup" name="Signup" />
          </Menu.Menu>
       </Menu>
       </div>
      )}
      </Segment>

  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.firstName,
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
