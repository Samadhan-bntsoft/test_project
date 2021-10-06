export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";

export const fetchUsersSuccess = users => {
  return {
      type: FETCH_USERS_SUCCESS,
      payload:users
  }
}

export const fetchImagesSuccess = (images) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: images,
  };
};
