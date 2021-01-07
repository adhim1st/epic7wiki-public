export const searchHero = (payload) => {
  return {
    type: "search/setSearch",
    search: payload,
  };
};
