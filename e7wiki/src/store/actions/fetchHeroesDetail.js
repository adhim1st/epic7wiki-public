export const fetchHeroesDetail = (heroId) => {
  return (dispatch, getState) => {
    fetch(`https://api.epicsevendb.com/hero/${heroId}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "heroDetail/setHeroDetail",
          heroDetail: data.results[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
