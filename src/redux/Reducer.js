import {
  SET_USER_PROFILE_DATA,
  SET_TIMESTAMP,
  UPDATE_USER_PREFERENCE,
  CLEAR_REDUX_INITIAL,
  SET_CART_COUNT,
  INCREASE_CART_COUNT,
  DECREASE_CART_COUNT,
} from "./ActionTypes";

const initialState = {
  profileDetails: "",
  timestamp: "",
  cartCount: 0,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_REDUX_INITIAL:
      return {
        ...state,
        profileDetails: "",
        timestamp: "",
      };
    case SET_USER_PROFILE_DATA:
      return {
        ...state,
        profileDetails: action.payload,
      };
    case SET_TIMESTAMP:
      return {
        ...state,
        timestamp: action.payload,
      };
    case UPDATE_USER_PREFERENCE:
      return {
        ...state,
        profileDetails: action.payload,
      };
    case SET_CART_COUNT:
      return {
        ...state,
        cartCount: action.payload,
      };
    case INCREASE_CART_COUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };

    case DECREASE_CART_COUNT:
      return {
        ...state,
        cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0,
      };
    default:
      return state;
  }
};

export default AppReducer;
