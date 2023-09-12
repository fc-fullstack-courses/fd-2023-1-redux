import { produce } from 'immer';
import * as ActionCreators from '../actions/counterActionCreators';

const initialState = {
  count: 0,
  step: 1
}

const handlers = {
  [ActionCreators.increment.type]: produce((draftState, action) => {
    draftState.count = draftState.count + draftState.step;
  }),
  [ActionCreators.decrement.toString()]: produce((draftState, action) => {
    draftState.count = draftState.count - draftState.step;
  }),
  [ActionCreators.reset.type]: produce((draftState, action) => {
    draftState.count = initialState.count;
    draftState.step = initialState.step;
  }),
  [ActionCreators.changeStep.type]: produce((draftState, action) => {
    draftState.step = action.payload;
  }),
}

function counterReducer(state = initialState, action) {
  const { type } = action;

  const handler = handlers[type];

  return handler ? handler(state, action) : state;
}

export default counterReducer;