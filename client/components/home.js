import React from 'react';
import { Image } from 'semantic-ui-react'

export default class Home extends React.Component {

  render() {
    return(
      <div>
      <h1 className="container" style={{textAlign: 'center'}}>Welcome to Virtupal</h1>

      <h2 className="container" style={{textAlign: 'center'}}>The right place to connect with the world</h2>
      <Image className="container" src='img.jpg' />
      </div>
    )
  }
}
