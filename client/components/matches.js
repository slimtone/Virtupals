import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Matches (props) {

  const { channels, user } = props;
  console.log(user);

  return (
    <ul>
    <h2>Your matches</h2>
      {
        channels.map(channel => {
          return (
            <ul key={channel.id}>
            {channel.user1 || channel.user2 === user.id ?
              <NavLink to={`/channels/${channel.id}`}>
                <span># {channel.name}</span>
              </NavLink>
              : null}
            </ul>
          );
        })
      }
    </ul>
  );
}

const mapStateToProps = function (state) {
  return {
    messages: state.messages,
    channels: state.channels,
    matches: state.matches,
    user: state.user
  };
};

export default withRouter(connect(mapStateToProps)(Matches));
