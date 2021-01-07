export const fetchHeroes = () => {
  return (dispatch, getState) => {
    fetch("https://api.epicsevendb.com/hero")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "heroes/setHeroes",
          heroes: data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
