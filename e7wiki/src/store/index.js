import { createStore } from "redux";

const initialState = {
  favourite: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "favourite/setFavourite":
      let clonedState = { ...state };
      let duplicate = false;
      for (let i = 0; i < clonedState.favourite.length; i++) {
        if (clonedState.favourite[i]._id === action.payload._id) {
          duplicate = true;
        }
      }
      if (duplicate === false) {
        return { ...state, favourite: state.favourite.concat(action.payload) };
      }
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
