import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
  const [movies, setMovies] = useState({ results: [] });

  const [search, setSearch] = useState("");

  const [movie, setMovie] = useState(0);
  const [printmovie, setPrintmovie] = useState([0])

  const getMovies = async () => {
    const response = await fetch(`http://localhost:4000/api/movies/`);
    const data = await response.json();
    if (search.trim() === "") {
      setMovies(data);
    }
  };

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   if (search.trim() === "") {
  //     return;
  //   }
  //   const searchResponse = await fetch(
  //     `http://localhost:4000/api/movies/${search}`
  //   );
  //   const searchData = await searchResponse.json();
  //   setMovies(searchData);
  // };

  const Movie = async () => {
    const peliMovie = await fetch(
      `http://localhost:4000/api/movies/movie/${movie}`
    );
    const datapeli = await peliMovie.json();
    setPrintmovie(datapeli);
   
  };
  useEffect(() => {
    getMovies();
  }, [search]);
  useEffect(() => {
    Movie();
  }, [movie]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        search,
        setSearch,
        // handleSearch,
        setMovie,
        movie,
        Movie,
        printmovie,
        setPrintmovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
