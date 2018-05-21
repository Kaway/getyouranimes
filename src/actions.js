export const RESET_FILTERS = "RESET";
export const TITLE_FILTER = "TITLE_FILTER";
export const PROVIDER_FILTER = "PROVIDER_FILTER";
export const INIT = "INIT";

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

export function init(animes) {
  return {
    type: INIT,
    value: animes
  }
}
