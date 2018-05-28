import { combineReducers } from 'redux'

import {RESET_FILTERS, PROVIDER_FILTER, TITLE_FILTER, INIT} from './actions'

const initialState = {
  defaultAnimes: [],
  animes: [],
  selectedProvider: "",
  titleFilter: "",
  providers: []
};

const filtersReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT:
      return Object.assign({}, state, {
        defaultAnimes: action.value,
        animes: action.value,
        providers: [...new Set(action.value.map(x => x.provider ))]
      });
    case RESET_FILTERS:
      return Object.assign({}, state, {
        providerFilter: "",
        selectedProvider: "",
        titleFilter: "",
        animes: state.defaultAnimes,
      });
    case PROVIDER_FILTER:
      return Object.assign({}, state, {
        selectedProvider: action.value,
        animes: filterAnimes(action.value, state.selectedProvider, 
          state.titleFilter, state.titleFilter, state.animes, state.defaultAnimes)
      });
    case TITLE_FILTER:
      const filtered = filterAnimes(state.selectedProvider, state.selectedProvider,
        action.value, state.titleFilter, state.animes, state.defaultAnimes);
      return Object.assign({}, state, {
        titleFilter: action.value,
        animes: filtered,
      });
    default:
      return state;
  }

}

function filterAnimes(providerFilter, oldP, animeFilter, oldA, actualAnimes, defaultAnimes) {
  let filtered;

  if(providerFilter !== oldP || animeFilter !== oldA) {
    
    filtered = defaultAnimes;

    if(providerFilter !== "") {
      filtered = filtered.filter(x => x.provider === providerFilter);
    }

    if(animeFilter !== "") {
      filtered = filtered.filter( x => x.title.toUpperCase().indexOf(animeFilter.toUpperCase()) !== -1);
    }

  } else {
    filtered = actualAnimes;
  }

  return filtered;
}

const gyaApp = combineReducers({
  filtersReducer
});

export default gyaApp;
