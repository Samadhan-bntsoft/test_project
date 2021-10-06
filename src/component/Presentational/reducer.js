import * as ACTIONS from "./action";

export const initialState = {
  prop: false,
};

export const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        prop: true,
      };
    case "FAILURE":
      return {
        ...state,
        prop: false,
      };
    default:
      return state;
  }
};
