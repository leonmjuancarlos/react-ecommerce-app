export const shopReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.page,
      }
    case 'BRANDS_FILTER':
      return {
        ...state,
        brands: action.brands,
        page: 1,
      }

    case 'SEARCH_FILTER':
      return {
        ...state,
        searchText: action.searchText,
      }
    default:
      return state
  }
}
