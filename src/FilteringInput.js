import React, { Component } from 'react';

import connect from 'react-redux/lib/connect/connect';

import {titleFilter} from './actions'

class ConnectedFilteringInput extends Component {

  filterAnimes = (event) => {
    this.props.onchange(event.target.value);
  }

  render() {
    return (
      <input type="text" value={this.props.value} onChange={this.filterAnimes} className="form-control" placeholder="Start typing a title" />
    );
  }

}


const mapStateToProps = state => {
  return {
    value: state.filtersReducer.titleFilter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onchange: text => dispatch(titleFilter(text))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedFilteringInput);
