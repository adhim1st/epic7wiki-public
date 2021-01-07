const initialState = {
  heroes: [],
  favourite: [],
  heroDetail: [],
};

function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case "favourite/setFavourite":
      return { ...state, favourite: state.favourite.concat(action.favourite) };
    case "heroes/setHeroes":
      return { ...state, heroes: action.heroes };
    case "heroDetail/setHeroDetail":
      return { ...state, heroDetail: action.heroDetail };
    default:
      return state;
  }
}

export default heroesReducer;
