import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, push } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'

const configureStore = (history, preloadedState) => {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history));

  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(middleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;

