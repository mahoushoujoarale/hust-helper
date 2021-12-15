import { LOGIN, LOGOUT, GET_USER_INFO } from "../constants/user"

const INITIAL_STATE = {
  isLogin: 0,
  userInfo: {},
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
}
