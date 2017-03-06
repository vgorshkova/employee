import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import rootSaga from '../sagas'

const configureStore = ( history, preloadedState ) => {
	const sagaMiddleware = createSagaMiddleware()

	const middleware = applyMiddleware(
		sagaMiddleware,
		routerMiddleware( history ));

	const store = createStore(
		rootReducer,
		preloadedState,
		middleware
	);

	sagaMiddleware.run(rootSaga);

	return store;
};

export default configureStore;