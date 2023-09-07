import ACTION_TYPES from "./actionTypes";

export function increment() {
  const action = {
    type: ACTION_TYPES.INCREMENT,
  };

  return action;
}

export const decrement = () => ({
  type: ACTION_TYPES.DECREMENT
});

export const reset = () => ({
  type: ACTION_TYPES.RESET
});

/**
 * 
 * @param {number} newStep 
 * @returns {object}
 */
export const changeStep = (newStep) => ({
  type: ACTION_TYPES.CHANGE_STEP,
  payload: newStep
});
