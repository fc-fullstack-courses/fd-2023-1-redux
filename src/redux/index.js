import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

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

const store = createStore(reducer, composeWithDevTools());

export default store;