import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Fibonacci from "./views/Fibonacci";
import EjerAkeLab from "./views/EjerAkeLab";
import Movies from "./views/movie/index";
import Movie from './views/movie/components/Movie'
import { MovieState } from "./MovieContext/MovieContext";


function App() {
  const [ver, cambiarVer] = useState(false);

  let clases =
    "w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center boton";
  let clases1 =
    "w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center boton hidden";

  const toggle = () => {
    cambiarVer(!ver);
  };

  return (
    <MovieState>
    <Router>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-5">
          <span className="font-semibold text-3xl tracking-tight">AkeLab</span>
        </div>
        <div className="block lg:hidden ">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggle}
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className={ver ? clases : clases1}>
          <div className="text-sm lg:flex-grow">
            <NavLink
              to="/fibonacci"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Fibonacci
            </NavLink>
            <NavLink
              to="/EjerAkeLab"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              EjerAkeLab
            </NavLink>
            <NavLink
              to="/Movies"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              activeClassName="bg-white text-blue-500 font-semibold uppercase m-1 px-4 py-2 rounded-full shadow hover:text-blue-600"
            >
              Movie
            </NavLink>
           
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/fibonacci">
          <Fibonacci />
        </Route>
        <Route path="/ejerakelab">
          <EjerAkeLab />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
      </Switch>
    </Router>
    </MovieState>
  );
}

export default App;
