import { INIT, PROVIDER_FILTER, RESET_FILTERS, TITLE_FILTER} from "./actionTypes";

export function resetFilters() {
  return {
    type: RESET_FILTERS
  };
}

export function titleFilter(text) {
  return {
    type: TITLE_FILTER,
    value: text
  };
}

export function providerFilter(text) {
  return {
    type: PROVIDER_FILTER,
    value: text
  };
}

export const init = animes => ({
    type: INIT,
    value: animes
});
