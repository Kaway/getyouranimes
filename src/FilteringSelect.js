import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';

import {providerFilter} from './actions'

class ConnectedFilteringSelect extends Component {

  filterProviders = (event) => {
    this.props.onchange(event.target.value);
  }

  render() {
    const options = this.props.providers.map((provider) =>
      <option key={provider} value={provider}>{provider}</option>
    );
    return (
      <div>
        <label for="provider"><span className="sr-only">Provider</span>&nbsp;</label>
        <select id="provider" name="provider" value={this.props.value} className="form-control" onChange={this.filterProviders}>
          <option value="" label="-- Provider --">-- Provider --</option>
        {options}
      </select>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    value: state.filtersReducer.selectedProvider,
    providers: state.filtersReducer.providers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onchange: text => dispatch(providerFilter(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedFilteringSelect);
