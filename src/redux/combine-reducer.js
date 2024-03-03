import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
}

const combineReducer=combineReducers({

})

const persistedReducer = persistReducer( persistConfig ,combineReducer)

export default persistedReducer