// import redux, { connect } from 'redux';

const redux =  require('redux')
const reduxLogger = require("redux-logger");

const createStore = redux.createStore
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function increment() {
    return {
        type: INCREMENT,
    }
}

function decrement() {
  return {
    type: DECREMENT,
  };
}

const counts = {
    count: 0,
}

const nums = {
  num: 0,
};

const reducer = (state = counts, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count : state.count + 1
            }
      default:
        return state
    }
}

const reducer1 = (state = nums, action) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        num: state.num + 1,
      };
    default:
      return state;
  }
};

const reducers = combineReducer({
  count: reducer,
  num: reducer1,
});
const store = createStore(reducers,applyMiddleware(logger))
console.log('initial state', store.getState());
const uns = store.subscribe(() => {})
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
// uns();