import { useSelector } from "react-redux";
import FavouriteHeroCard from "../components/FavouriteHeroCard";
export default function Home() {
  const favourite = useSelector((state) => state.heroesReducer.favourite);
  return (
    <>
      <div className="container">
        <h1 style={{ color: "#9f9f9c" }}>Favourite Hero</h1>
        <div className="row">
          {favourite.map((hero) => {
            return <FavouriteHeroCard key={hero.id} hero={hero} />;
          })}
        </div>
      </div>
    </>
  );
}
