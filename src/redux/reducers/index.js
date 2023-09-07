import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  count: 0,
  step: 1,
  test: 12343423543
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      const newState = {
        ...state,
        count: state.count + state.step
      }

      return newState;
    }
    case ACTION_TYPES.DECREMENT: {
      const newState = {
        ...state,
        count: state.count - state.step
      }

      return newState;
    }
    case ACTION_TYPES.RESET: {

      return {
        ...state,
        count: initialState.count,
        step: initialState.step
      }
    }
    case ACTION_TYPES.CHANGE_STEP : {

      return {
        ...state,
        step: action.payload
      }
    }
    default: return state;
  }
}

export default reducer;