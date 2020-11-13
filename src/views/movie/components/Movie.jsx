import React, { useContext } from "react";
import { MovieContext } from "../../../MovieContext/MovieContext";
import StarYellow from '../../../assets/Star3.png'
import StarGrey from '../../../assets/Star5.png'

export default function Movies() {
  const { printmovie } = useContext(MovieContext);

  const mov = printmovie[0];

  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12 ">
        {mov !== undefined ? (
          <div className="container max-w-sm w-full lg:max-w-full lg:flex shadow hover:shadow-xl transition duration-150">
            <div
              className="h-48 lg:h-auto lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden "
              title="Woman holding a mug"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
                alt=""
              />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center"></p>
                <div className="text-gray-900 font-bold text-6xl mb-2">
                  {mov.original_title}
                </div>
                <p className="text-gray-700 text-lg text-justify mt-8">
                  {mov.overview}
                </p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <div className="flex flex-wrap">
                    <p className="text-gray-900 mx-1 mb-3 text-lg leading-none flex flex-wrap">
                      {mov.vote_average}
                    </p>
                    <div className="flex flex-wrap">
                       
                      <img className=" mx-1 w-5 h-5" src={StarYellow} alt="" />
                      <img className=" mx-1 w-5 h-5" src={StarYellow} alt="" />
                      <img className=" mx-1 w-5 h-5" src={StarYellow} alt="" />
                      <img className=" mx-1 w-5 h-5" src={StarYellow} alt="" />
                      <img className=" mx-1 w-5 h-5" src={StarYellow} alt="" />
                      <img className=" mx-1 w-5 h-5" src={StarGrey} alt="" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg">{mov.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
