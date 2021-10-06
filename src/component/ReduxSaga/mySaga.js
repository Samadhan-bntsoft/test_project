import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchImagesSuccess } from "../Redux/action";


function requestUser() {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/",
  });
}

function* handleGetUser(action) {
  try {
    const response = yield call(requestUser);
    const { data } = response;
    yield put(fetchImagesSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* mySaga() {
  yield takeLatest("GET_USER", handleGetUser);
}

export default mySaga;
