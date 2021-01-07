export const setFavourite = (payload) => {
  console.log(payload);
  return (dispatch, getState) => {
    dispatch({
      type: "favourite/setFavourite",
      favourite: payload,
    });
  };
};
