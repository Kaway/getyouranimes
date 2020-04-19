import React from 'react';

import {resetFiltersAction} from './redux/actions'
import {connect} from 'react-redux'

const ConnectedResetButton = ({resetFilters}) => {

    return (
        <div>
            <label>&nbsp;</label>
            <button name="resetButton" type="button" className="btn btn-warning form-control"
                    onClick={resetFilters}> Reset <i className="fas fa-trash-alt" /></button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        resetFilters: () => dispatch(resetFiltersAction())
    };
};

export default connect(null, mapDispatchToProps)(ConnectedResetButton);
