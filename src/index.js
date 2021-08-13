import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./routes/App";
import reducer from "./reducers";
import useInitialStateMovie from "./hooks/useInitialStateMovie";
import "./global.css";

const initialState = {
  movies: {},
  myList: [],
  searchResult: {},
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

const container = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
