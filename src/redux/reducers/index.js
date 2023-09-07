const initialState = {
  count: 0,
  test: 12343423543
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment': {
      const newState = {
        ...state,
        count: state.count + 1
      }

      return newState;
    }
    case 'decrement': {
      const newState = {
        ...state,
        count: state.count - 1
      }

      return newState;
    }
    default: return state;
  }
}

export default reducer;