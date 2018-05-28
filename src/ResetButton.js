import React, { Component } from 'react';

import {resetFilters} from './actions'
import connect from 'react-redux/lib/connect/connect';

class ConnectedResetButton extends Component {

  render() {
    return (
      <div>
        <label>&nbsp;</label>
        <button name="resetButton" type="button" className="btn btn-warning form-control" onClick={this.props.resetFilters}> Reset <i className="fas fa-trash-alt"></i></button>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    resetFilters: () => dispatch(resetFilters())
  };
};

export default connect(null, mapDispatchToProps)(ConnectedResetButton);
