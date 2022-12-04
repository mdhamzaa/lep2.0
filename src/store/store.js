import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../features/userSlice';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'persistStorage',
    storage,
}


const persistedReducer = persistReducer(persistConfig, userReducer)
export const store = configureStore({
    reducer: {

        user: persistedReducer,
        middleware: [thunk]
    }
})


export const persistor = persistStore(store)