import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/userSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";
import createFilter from "redux-persist-transform-filter";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const saveUserOnlyFilter = createFilter("user",["user"])

const persistConfig = {
    key:"user",
    storage,
    whitelist:["user"],
    transforms:[saveUserOnlyFilter]
}

const rootReducer = combineReducers({
    user:userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer:persistedReducer,
    devTools:true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)