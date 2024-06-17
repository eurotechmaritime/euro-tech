import {
  SET_USER_PROFILE_DATA,
  SET_TIMESTAMP,
  UPDATE_USER_PREFERENCE,
  CLEAR_REDUX_INITIAL,
  SET_CART_COUNT,
  INCREASE_CART_COUNT,
  DECREASE_CART_COUNT,
} from "./ActionTypes";

export const setUserProfileData = (profileData) => {
  return {
    type: SET_USER_PROFILE_DATA,
    payload: profileData,
  };
};

export const setTimestamp = (timestamp) => {
  return {
    type: SET_TIMESTAMP,
    payload: timestamp,
  };
};

export const updateUserPreference = (updatedUserData) => {
  return {
    type: UPDATE_USER_PREFERENCE,
    payload: updatedUserData,
  };
};

export const clearReduxInitial = () => {
  return {
    type: CLEAR_REDUX_INITIAL,
    payload: "",
  };
};

export const updateCartCount = (count) => {
  return {
    type: SET_CART_COUNT,
    payload: count,
  };
};

export const increaseCartCount = () => {
  return {
    type: INCREASE_CART_COUNT,
  };
};

export const decreaseCartCount = () => {
  return {
    type: DECREASE_CART_COUNT,
  };
};
