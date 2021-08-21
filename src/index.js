import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./routes/App";
import reducers from "./reducers";
import useInitialStateMovie from "./hooks/useInitialStateMovie";
import "./global.css";
import reduxThunk from "redux-thunk";

const initialState = {
  movies: {},
  myList: [],
  searchResult: {},
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

const container = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
