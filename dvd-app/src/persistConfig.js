import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
    whitelist: ['movie', 'auth', 'reduxTokenAuth']
};

export default persistConfig;