import { useSelector } from "react-redux";
import FavouriteHeroCard from "../components/FavouriteHeroCard";
export default function Home() {
  const favourite = useSelector((state) => state.favouriteReducer.favourite);

  const favHeroList = favourite.length ? (
    favourite.map((hero) => {
      return <FavouriteHeroCard key={hero.id} hero={hero} />;
    })
  ) : (
    <h3 className="center text-white"> No Favourite Hero Yet </h3>
  );
  return (
    <div className="container">
      <h1 style={{ color: "#9f9f9c" }}>Favourite Hero</h1>
      <div className="row">{favHeroList}</div>
    </div>
  );
}
