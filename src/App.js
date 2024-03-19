import { useState, useEffect } from "react";
import MovieCard from "./movieCard";
import './App.css';
import searchIcon from './search.svg';
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=475dc69e';
function App() {
  const [movies,setmovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState([]);
  const searchMovies = async (title) =>{
    const response =await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
    console.log(data);
  }
  useEffect(() =>{
    searchMovies({API_URL});
  },[]);
  return (
    <div className="app">
      <h1>MovieHome</h1>
      <div className="search">
        <input placeholder="search for movies" 
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}></input>

        <img src={searchIcon}
          alt='search'
          onClick={() => {
            searchMovies(searchTerm);
            console.log(searchTerm);
          }
          }></img>

      </div>
      {
        movies?.length>0 ?(<div className="container">
          {
            movies.map((movie) => <MovieCard movie={movie} />)
          }
          </div>):
          (<div className="empty">
            <h2>No Movies found</h2>
          </div>)

      }
    </div>
  );
}

export default App;
