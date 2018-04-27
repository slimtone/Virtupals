import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NameEntry from './nameEntry';

function Matches (props) {

  const { messages, channels } = props;

  return (
    <ul>
      {
        channels.map(channel => {
          return (
            <li key={channel.id}>
              <NavLink to={`/channels/${channel.id}`}>
                <span># {channel.name}</span>
                <span className="badge">{ messages.filter(message => message.channelId === channel.id).length }</span>
              </NavLink>
            </li>
          );
        })
      }
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
}

const mapStateToProps = function (state) {
  return {
    messages: state.messages,
    channels: state.channels
  };
};

export default withRouter(connect(mapStateToProps)(Matches));
