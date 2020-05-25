import React from 'react';
import {
    Link
  } from "react-router-dom";
import Pagination from './Pagination';


 const Movies = ({movies, loading}) => {

    if(loading){
        return <h2 className="loading">Loading...</h2>;
    }

    return (
        <div>
          {/* <div className="filma" >
                    <p className="te-fundit-me-te-shikuarit">
                        FILMAT E FUNDIT
                        <a href="#">Te fundit</a>
                        <a href="#">Me te shikuarit</a>
                    </p>
                </div> */}

        {(movies && Array.isArray(movies) && movies.length>0)
        ? 
        <div className=" movie" > 
        
            {movies.map(movie => (               
                 
                <div key={movie.id} >

                <Link to={"/movie/" + movie.id}>
                    <img src={'https://admin.newfilma.com/storage/cover_images/' + movie.cover_image} className="items"/>
                </Link> 
                    <p className="movie-title">{movie.title}</p>
                    {(movie.categories && Array.isArray(movie.categories) && movie.categories.length>0)
                    ?  <div className="kategorite-e-filmave">
                        {movie.categories.map(category=>(
                        <p key={category.id}>
                            <Link to={"/category/"+ category.id}>
                                {category.name}
                            </Link>
                        </p>
                        ))}
                        </div>
                    :
                    <h3>Kategorite e filmave nuk ekzistojne</h3>
                    }
                                
                    </div>
            ))}
        </div>
        : <h1>Sorry.. Movies not found</h1>
    }

       </div> 
    )
};

export default Movies;
