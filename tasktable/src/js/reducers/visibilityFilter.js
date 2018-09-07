import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.checked === VisibilityFilters.HIDE_DONE ? VisibilityFilters.SHOW_ALL : VisibilityFilters.HIDE_DONE
    default:
      return state
  }
}

export default visibilityFilter;