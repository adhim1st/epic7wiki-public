import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import heroesReducer from "../store/reducers/heroesReducer";

const rootReducer = combineReducers({
  heroesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
