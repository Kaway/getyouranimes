import React, { Component } from 'react';
import { connect } from 'react-redux'

import {providerFilter} from './redux/actions'

class ConnectedFilteringSelect extends Component {

  filterProviders = (event) => {
    this.props.onchange(event.target.value);
  };

  render() {
    const options = this.props.providers.map((provider) =>
      <option key={provider} value={provider}>{provider}</option>
    );
    return (
      <div>
        <label htmlFor="provider"><span className="sr-only">Provider</span>&nbsp;</label>
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
    value: state.animes.selectedProvider,
    providers: state.animes.providers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onchange: text => dispatch(providerFilter(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedFilteringSelect);
