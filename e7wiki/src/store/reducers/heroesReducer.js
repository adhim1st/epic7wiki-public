const initialState = {
  heroes: [],
  heroDetail: {},
  loading: false,
  search: "",
};

function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case "heroes/setHeroes":
      return { ...state, heroes: action.heroes };
    case "heroDetail/setHeroDetail":
      return { ...state, heroDetail: action.heroDetail };
    case "loading/setLoading":
      return { ...state, loading: action.loading };
    case "search/setSearch":
      return { ...state, search: action.search };
    default:
      return state;
  }
}

export default heroesReducer;
