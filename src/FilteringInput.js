import React, { Component } from 'react';

import connect from 'react-redux/lib/connect/connect';

import {titleFilter} from './actions'

import {Label } from 'reactstrap';


class ConnectedFilteringInput extends Component {

  filterAnimes = (event) => {
    this.props.onchange(event.target.value);
  }

  onKeyPress = (event) => {
    if(event.key === "Enter") {
      event.target.blur();
    }

  }

  render() {
    return (
      <div>
        <Label for="animeTitle">Title</Label>
        <input id="animeTitle" name="animeTitle" type="text" className="form-control" value={this.props.value} onChange={this.filterAnimes} onKeyPress={this.onKeyPress} placeholder="Start typing a title" />
      </div>
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
