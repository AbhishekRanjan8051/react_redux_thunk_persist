import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./redux/reducers/userReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "main-root",
  storage,
};

const rootReducer = combineReducers({
  userList: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};
const middleware = [thunk];

const store = createStore(
  // rootReducer,
  persistedReducer,
  initialState,
  applyMiddleware(...middleware),
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const Persist = persistStore(store);
export { Persist };
export default store;
