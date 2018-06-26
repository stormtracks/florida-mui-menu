import React, { Component } from "react";

import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { Provider } from "react-redux";

import { createLogger } from "redux-logger";

import App from "./containers/App";
import rootReducer from "./reducers";

const history = createBrowserHistory();
const loggerMiddleware = createLogger();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(applyMiddleware(routerMiddleware(history), loggerMiddleware))
);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App history={history} />
      </Provider>
    );
  }
}
