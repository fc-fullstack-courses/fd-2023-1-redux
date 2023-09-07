import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  count: 0,
  test: 12343423543
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      const newState = {
        ...state,
        count: state.count + 1
      }

      return newState;
    }
    case ACTION_TYPES.DECREMENT: {
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