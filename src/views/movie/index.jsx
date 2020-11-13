import React from "react";
import Movies from "./components/Movies";
import Search from './components/Search'

export default function index() {
  return (
    <>
    <Search/>
      <Movies />
    </>
  );
}
