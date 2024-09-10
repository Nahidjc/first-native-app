import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import authSlice from "./reducers/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
const persistConfig = {
  key: "authentication",
  storage: AsyncStorage,
  //   whitelist: ["test"],
};
const persistedReducer = persistReducer(persistConfig, authSlice);
const combinedReducer = {
  auth: persistedReducer,
};
const middlewares = [];
if (__DEV__) {
  middlewares.push(logger);
}
export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: true,
});
export const persistor = persistStore(store);
