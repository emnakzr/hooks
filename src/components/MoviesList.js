import React from "react";
const MoviesList= (props) =>{
    return(
        <>
        {props.movies.map((movies,index)=><div>
            {movies.Title}
            <img src={movies.Poster} alt="movie" width="100"></img>
        </div>
        )}
        </>
    )
}
export default MoviesList;