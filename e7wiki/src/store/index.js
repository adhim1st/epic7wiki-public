import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import heroesReducer from "../store/reducers/heroesReducer";
import favouriteReducer from "../store/reducers/favouriteReducer";

const rootReducer = combineReducers({
  heroesReducer,
  favouriteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
