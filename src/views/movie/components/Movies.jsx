import React, { useContext } from "react";
import { MovieContext } from "../../../MovieContext/MovieContext";
import { useHistory } from "react-router-dom";


export default function Movies() {

  const { movies, setMovie, movie } = useContext(MovieContext);
  let history = useHistory();


  const onId = (id) => {
    setMovie(id);
    history.push("/movie");
    
    
  };

  return (
    <>
      <div className=" container my-12 mx-auto px-4 md:px-12 shadow">
        <div className="flex flex-wrap  -mx-1 lg:-mx-4">
          {movies.results.map((item) => (
            <div
              key={item.id}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
            >
              <article className="overflow-hidden rounded-lg shadow hover:shadow-2xl transition duration-300">
                <button onClick={() => onId(item.id)}>
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                </button>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
                    >
                      {item.original_title}
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    {item.release_date}
                  </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <p className="ml-2 text-sm">
                      <span className="text-gray-600 font-bold">
                        Calificacion{" "}
                      </span>{" "}
                      <span className="text-gray-700">
                        {" "}
                        {item.vote_average}
                      </span>
                    </p>
                  </a>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
