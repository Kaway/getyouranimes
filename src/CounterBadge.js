import React, { Component } from 'react';
import { Badge } from 'reactstrap';

import connect from 'react-redux/lib/connect/connect';


class CounterBadge extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h4><Badge color="primary">{this.props.count} {this.props.children}</Badge></h4>
    );
  }

}


export default CounterBadge;