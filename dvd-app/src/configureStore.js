import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reduxTokenAuthReducer } from 'redux-token-auth';
import authReducer from './store/reducers/auth';
import userReducer from './store/reducers/user';
import movieReducer from './store/reducers/movie';
import omdbReducer from './store/reducers/omdb';

import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';


export default function configureStore (preloadedState) {
    const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  : null || compose;

    const rootReducer = combineReducers({
        reduxTokenAuth: reduxTokenAuthReducer,
        auth: authReducer,
        user: userReducer,
        movie: movieReducer,
        omdb: omdbReducer
    });
  
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    
    const store = createStore(persistedReducer, preloadedState, composeEnhancers(
        applyMiddleware(thunk)
    ));

    return { persistor: persistStore(store), store };
}
