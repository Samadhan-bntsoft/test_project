import { FETCH_USERS_SUCCESS, FETCH_IMAGES_SUCCESS } from "./action";

export const initialState = {
  users: [],
  images:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

