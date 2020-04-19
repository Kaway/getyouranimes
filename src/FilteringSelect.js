import React from 'react';
import {connect} from 'react-redux'

import {providerFilter} from './redux/actions'

const ConnectedFilteringSelect = ({value, providers, onchange}) => {

  const filterProviders = (event) => {
    onchange(event.target.value);
  };

  const options = providers.map((provider) =>
      <option key={provider} value={provider}>{provider}</option>
  );
  return (
      <div>
        <label htmlFor="provider"><span className="sr-only">Provider</span>&nbsp;</label>
        <select id="provider" name="provider" value={value} className="form-control" onChange={filterProviders}>
          <option value="" label="-- Provider --">-- Provider --</option>
          {options}
        </select>
      </div>
  );

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
