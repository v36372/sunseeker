import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const configureStore = preloadedState => {

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		|| compose;

	const store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(
			applyMiddleware(thunk, createLogger())
		)
	);

	if (module.hot) {
		// Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
};

export default configureStore
