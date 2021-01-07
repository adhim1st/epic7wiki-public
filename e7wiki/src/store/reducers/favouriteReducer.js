const initialState = {
  favourite: [],
};

function favouriteReducer(state = initialState, action) {
  switch (action.type) {
    case "favourite/setFavourite":
      return { ...state, favourite: state.favourite.concat(action.favourite) };
    default:
      return state;
  }
}

export default favouriteReducer;
