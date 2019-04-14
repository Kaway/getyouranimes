import { INIT, RESET_FILTERS, TITLE_FILTER, PROVIDER_FILTER} from "../actionTypes";

const initialState = {
    all: [],
    animes: [],
    providers: [],
    selectedProvider: "",
    titleFilter: "",
};

const animes = (state = initialState, action) => {
    switch(action.type) {
        case INIT:
            return Object.assign({}, state,
                {
                    animes: action.value['animes'],
                    all: action.value['animes'],
                    lastUpdate: action.value['lastUpdate'],
                    providers: [...new Set(state.all.map(x => x.provider ))],                });
        case RESET_FILTERS:
            return Object.assign({}, state, {
                selectedProvider: "",
                titleFilter: "",
                animes: state.all,
                //providers: [...new Set(state.defaultAnimes.map(x => x.provider ))],
            });
        case PROVIDER_FILTER:
            return Object.assign({}, state, {
                selectedProvider: action.value,
                animes: filterAnimes(action.value, state.selectedProvider,
                    state.titleFilter, state.titleFilter, state.animes, state.all),
            });
        case TITLE_FILTER:
            const filtered = filterAnimes(state.selectedProvider, state.selectedProvider,
                action.value, state.titleFilter, state.animes, state.all);
            return Object.assign({}, state, {
                titleFilter: action.value,
                animes: filtered,
            });
        default:
            return state;
    }

};

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
    console.log(filtered);
    return filtered;
}

export default animes;