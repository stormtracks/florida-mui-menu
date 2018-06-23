import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const history = createBrowserHistory();
const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        loggerMiddleware
      )
    )
  );
}

/*
export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
*/
