import React, { Component } from 'react';

import connect from 'react-redux/lib/connect/connect';

import {titleFilter} from './actions'


class ConnectedRefreshModel extends Component {
      
  state = {
    show: false
  };

  componentDidMount() {
    window.addEventListener("newContentAvailable", () =>  {
      this.setState({
        show: true
      });
    });
  }

  onClick = () => {
    window.location.reload(window.location.href);
  }

  render() {
    if(!this.state.show) {
        return null;
    }

    return (
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        New content is available ! <a className="alert-link"onClick={this.onClick}>Refresh</a>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
    //value: state.filtersReducer.titleFilter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    //onchange: text => dispatch(titleFilter(text))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRefreshModel);
