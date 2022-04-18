import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "../constaints/userConstaints";

const initial_state = { loading: false, users: [] };

export const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true, users: [] };

    case GET_USER_SUCCESS:
      console.log({ Data: action.payload });
      return { ...state, loading: false, users: action.payload };
    case GET_USER_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
