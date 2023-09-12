import { createReducer } from '@reduxjs/toolkit';
import * as ActionCreators from '../actions/counterActionCreators';

const initialState = {
  count: 0,
  step: 1
}

const counterReducer = createReducer(initialState, (builder) => {
  // builder.addCase(ActionCreators.increment.toString());
  // builder.addCase(ActionCreators.increment);
  builder.addCase(ActionCreators.increment.type, (state, action) => {
    state.count = state.count + state.step;
  });

  builder.addCase(ActionCreators.decrement, (state, action) => {
    state.count = state.count - state.step;
  });

  builder.addCase(ActionCreators.reset, (state, action) => {
    return initialState;
  });

  builder.addCase(ActionCreators.changeStep, (state, action) => {
    state.step = action.payload;
  });
});

export default counterReducer;