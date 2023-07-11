import storage from 'redux-persist/lib/storage';
import rootSaga from './rootSaga';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer, rootPersistConfig } from './rootReducer';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store with middleware and persistence
const persistConfig = {
  ...rootPersistConfig,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  devTools: true,
  middleware: [sagaMiddleware],
  reducer: persistedReducer,
});

const persistor = persistStore(store);

// Run the root saga
sagaMiddleware.run(rootSaga);

export { store, persistor };