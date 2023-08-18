import React, { useState, useEffect } from "react";

import Card from "./Card";
import SearchIcon from "./icons8-search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=84f1279e";

const App = () => {

  const [searchItem, setsearchItem] = useState("");
  //const [totalFound, settotalFound] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => { searchMovies("Iron man"); }, []);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const info = await response.json();

    setMovies(info.Search);
    //console.log(info);
  };

  return (
    <div className="app">

      <h1>🐺DarkWolf🐺 Movies</h1>

      <div className="search">
        <input
          value={searchItem}
          onChange={(e) => setsearchItem(e.target.value)}
          placeholder="Search for movies 🐺"
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchItem)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (   <Card movie={movie} />   ))}
        </div>  )    
        : 
        (
        <div className="empty">
          <h2>🛑 No movies found!! 🛑</h2>
        </div>
      )}
    </div>
  );
};

export default App;