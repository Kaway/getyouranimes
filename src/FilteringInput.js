import React from 'react';

import {connect} from 'react-redux'

import {titleFilter} from './redux/actions'

import {Label} from 'reactstrap';


const ConnectedFilteringInput = ({value, onchange}) => {

  const filterAnimes = (event) => {
    onchange(event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      event.target.blur();
    }
  };

  return (
      <div>
        <Label for="animeTitle">Title</Label>
        <input id="animeTitle" name="animeTitle" type="text" className="form-control" value={value}
               onChange={filterAnimes} onKeyPress={onKeyPress} placeholder="Start typing a title"/>
      </div>
  );

}


const mapDispatchToProps = dispatch => {
  return {
    onchange: text => dispatch(titleFilter(text))
  }
};

const mapStateToProps = state => {
  return {
    value: state.animes.titleFilter
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedFilteringInput);
