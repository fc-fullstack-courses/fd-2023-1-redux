import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');

export const decrement = createAction('counter/decrement');

export const reset = createAction('counter/reset');

/**
 * 
 * @param {number} newStep 
 * @returns {object}
 */
export const changeStep = createAction('counter/changeStep');

// action type
// console.log(increment.type); -> 'counter/increment'
// console.log(increment.toString()); -> 'counter/increment'

function myCreateAction (type) {

  function actionCreator (payload) {
    const action = {
      type
    }

    if(payload) {
      action.payload = payload;
    }

    return action;
  }

  actionCreator.type = type;
  actionCreator.toString = () => type;

  return actionCreator;
}
