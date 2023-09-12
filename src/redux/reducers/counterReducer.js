import { produce } from 'immer';
import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  count: 0,
  step: 1
}

const handlers = {
  [ACTION_TYPES.INCREMENT]: produce((draftState, action) => {
    draftState.count = draftState.count + draftState.step;
  }),
  [ACTION_TYPES.DECREMENT]: produce((draftState, action) => {
    draftState.count = draftState.count - draftState.step;
  }),
  [ACTION_TYPES.RESET]: produce((draftState, action) => {
    draftState.count = initialState.count;
    draftState.step = initialState.step;
  }),
  [ACTION_TYPES.CHANGE_STEP]: produce((draftState, action) => {
    draftState.step = action.payload;
  }),
}

function counterReducer(state = initialState, action) {
  const { type } = action;

  const handler = handlers[type];

  return handler ? handler(state, action) : state;
}

export default counterReducer;