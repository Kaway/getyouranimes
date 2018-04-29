import React, { Component } from 'react';
import { Badge } from 'reactstrap';

import connect from 'react-redux/lib/connect/connect';


class ConnectedCounterBadge extends Component {

  render() {
    return (
      <h4><Badge color="primary">{this.props.count} animes</Badge></h4>
    );
  }

}

const mapStateToProps = state => {
  return {
    count: state.filtersReducer.animes.length
  };
};

export default connect(mapStateToProps)(ConnectedCounterBadge);
