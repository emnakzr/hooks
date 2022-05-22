import React, { useState } from "react";
import MoviesList from './components/MoviesList'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarCustom from "./components/NavbarCustom";

import Add from './components/Add';
function App() {

  const [movies, setMovies] = useState([
    { Title: "one piece: Gold   ", Poster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dbcetur-efef15e8-04b6-4583-bd10-49bd6177824a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGJjZXR1ci1lZmVmMTVlOC0wNGI2LTQ1ODMtYmQxMC00OWJkNjE3NzgyNGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cFUd8cZM2HLa1ayFd5pSQDahlx9WOWA0Y5s9iQosg98", Year: "2016" },
    { Title: "spider-man no way home", Poster: "https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg", Year: "2021" },
  ]);
const addFilm=(film)=>{
  setMovies([...movies,film])
}
const onSearch=(c)=>{
  setMovies(movies.filter((elt)=>elt.Title.toLowerCase().includes(c.toLowerCase())))
  console.log('hello lanched')
}

  return (
    <>
    <NavbarCustom onSearch={onSearch}/>
      <MoviesList movies={movies} />
      <Add addFilm={addFilm}/>

    </>
  );
}

export default App;
