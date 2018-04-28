import React, { Component } from 'react';

import {resetFilters} from './actions'
import connect from 'react-redux/lib/connect/connect';

class ConnectedResetButton extends Component {

  render() {
    return (
      <button type="button" className="btn btn-info" onClick={this.props.resetFilters}> Reset <i className="fas fa-trash-alt"></i></button>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    resetFilters: () => dispatch(resetFilters())
  };
};

export default connect(null, mapDispatchToProps)(ConnectedResetButton);