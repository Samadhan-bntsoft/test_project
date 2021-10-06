import React, { useState, useMemo } from "react";
import "./App.css";
import Effect from "./component/Effect";
import Memo from "./component/Memo";
import Ref from "./component/Ref";
import FetchData from "./component/FetchData";
import { ContextData, ContextDatac } from "./component/ContextData";
import Reducers from "./component/Reducers";
import ReducerFetchData from "./component/ReducerFetchData";
import Presentational from "./component/Presentational/Presentational";
import Promise from "./component/Promise";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./component/Nav";
// import ThunkMiddleware  from "redux-thunk";
import { Provider } from "react-redux";
import ReduxComp from "./component/Redux/ReduxComp";
import ReduxCompClass from "./component/Redux/ReduxCompClass";
import store from "./component/Redux/store";
import MaterialUiComponent from "./component/MaterialUi/MaterialUiComponent";
import UseState from "./component/UseState";
import TestingHome from "./component/TestingHome";
import ReduxSaga from "./component/ReduxSaga";
import Test from "./component/newTesting/Test";
import  LazyAdd from "./component/LazyLoading";
import  Rechart from "./component/Rechart";
import EnhancedLikes from "./component/HOC/LikesCount";
import EnhancedComments from "./component/HOC/CommentsCount";
import Counter from "./component/Counter/Counter";
import TestHookReducer from "./component/Presentational/TestHookReducer";
import ContextTest from "./component/Presentational/Context/ContextTest";
import Formtest from "./component/FormTest/Formtest";
import TestAxios from "./component/AxiosTesting/TestAxios";
export const ContextDa = React.createContext({name:'john cena'});

function App() {
  const [count, setCount] = useState(0);
  const [j, setJ] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const incrementj = () => {
    setJ(j + 1);
  };

  const MemoComp = useMemo(() => {
    return <Memo msg="memo used" vl={j}></Memo>;
  }, [j]);

  const [state, setstate] = useState("some");
  const changeHandle = () => {
    setstate("some Text change");
  };

  return (
    <Provider store={store}>
      <ContextDa.Provider
        value={{ work: "work cena", test: state, change: changeHandle }}
      >
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact strict component={TestingHome} />
              <Route path="/jesttest" exact strict component={Counter} />
              <Route path="/usestate" exact strict>
                <UseState
                  count={count}
                  increment={increment}
                  incrementj={incrementj}
                />
                <Memo vl={j} />
                <h2>useMemo/Pure component (stateless)</h2>
                {MemoComp}
              </Route>
              <Route path="/useref" exact strict>
                <Ref />
              </Route>
              <Route path="/useeffect" exact strict>
                <Effect />
                <h3>Fetching data using axios in useEffect</h3>
                <FetchData />
              </Route>
              <Route path="/usecontext" exact strict>
                <ContextData />
                <ContextDatac />
              </Route>
              <Route path="/usereducer" exact strict>
                <Reducers />
                <hr />
                <ReducerFetchData />
              </Route>
              <Route path="/promise" exact strict>
                <Promise />
              </Route>
              <Route path="/presentationalcaomponent" exact strict>
                <Presentational title="presentation" count={count} />
              </Route>
              <Route path="/redux" exact strict>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "50%" }}>
                    <ReduxComp />
                  </div>
                  <div style={{ width: "50%" }}>
                    <ReduxCompClass />
                  </div>
                </div>
              </Route>
              <Route path="/materialui" exact strict>
                <MaterialUiComponent />
              </Route>
              <Route path="/reduxsaga" exact strict component={ReduxSaga} />
              <Route path="/newtest" exact strict component={Test} />
              <Route path="/lazy" exact strict component={LazyAdd} />
              <Route path="/rechart" exact strict component={Rechart} />
              <Route path="/HOC" exact strict>
                <EnhancedLikes />
                <EnhancedComments />
              </Route>
              <Route
                path="/TestHookReducer"
                exact
                strict
                component={TestHookReducer}
              />
              <Route path="/ContextTest" exact strict component={ContextTest} />
              <Route path="/Formtest" exact strict component={Formtest} />
              <Route path="/Axiostest" exact strict >
                <TestAxios url='https://jsonplaceholder.typicode.com/posts/1' />
              </Route>
            </Switch>
          </div>
        </Router>
      </ContextDa.Provider>
    </Provider>
  );
}

export default App;
