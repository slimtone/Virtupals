import React from 'react';

export default function Message (props) {

  const message = props.message;
  console.log('MESSAGE NAME', message.user.firstName)
  return (
    <li className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={message.user.image} alt="image" height='50' width='50' />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{ message.user.firstName }</h4>
        { message.content }
      </div>
    </li>
  );
}
