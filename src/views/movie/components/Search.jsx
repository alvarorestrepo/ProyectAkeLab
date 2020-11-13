
import { useContext } from "react";
import { MovieContext } from "../../../MovieContext/MovieContext";

const HeroNavSearch = () => {
  const { search, setSearch, handleSearch } = useContext(
    MovieContext
  );

  return (
    <form  onSubmit={handleSearch}>
      { (
        <input
          className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-1/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
    </form>
  );
};



export default HeroNavSearch;
