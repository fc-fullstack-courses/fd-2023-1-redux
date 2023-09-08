import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  users: [],
  isLoading: false,
  error: null
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS: {
      const { payload: newUser } = action;

      return {
        ...state,
        isLoading: false,
        users: [...state.users, newUser]
      }
    }
    case ACTION_TYPES.CREATE_USER_ERROR: {
      const { payload: error } = action;

      return {
        ...state,
        isLoading: false,
        error
      }
    }
    default: return state;
  }
}

export default userReducer;