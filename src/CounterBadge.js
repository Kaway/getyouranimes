import React, { Component } from 'react';
import { Badge } from 'reactstrap';

class CounterBadge extends Component {

  render() {
    return (
      <h4><Badge color="primary">{this.props.count} {this.props.children}</Badge></h4>
    );
  }

}

export default CounterBadge;
