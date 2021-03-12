import React, { Component } from 'react';
import Nav from './Nav';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <div>
            <Nav />
          {this.props.children}
      </div>
    );
  }
}
