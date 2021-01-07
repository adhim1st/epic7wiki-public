export const setFavourite = (payload) => {
  return {
    type: "favourite/setFavourite",
    favourite: payload,
  };
};
