import React,{ useState, useEffect } from 'react'
import {
    useParams,
    Link
  } from "react-router-dom";
import Axios from 'axios';
import VideoPlayer from "react-video-js-player";

 const Movie = ({}) => {
    let { id } = useParams();
  
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);

    const fetchMovie = async () =>{
        setLoading(true);
        const res= await Axios.get('https://admin.newfilma.com/api/movies/'+id);
        setMovie(res.data);
        setLoading(false);
        }

    useEffect(()=>{
        fetchMovie();
    }, []);
 
    
    console.log(movie);
    
    if(loading){
        return <h2 className="loading-movie">Loading...</h2>;
    }

    return (

        <div className=" home">
            {movie.map(film=>(
                <div key={film.id}>
                    {film.streams.map(stream=>(
                       <div key={stream.id} >
                           
                       <VideoPlayer 
                       src = {stream.url}
                       poster = {'https://admin.newfilma.com/storage/cover_images/'+ film.cover_image}
                
                       />
                       </div>
                    ))}
                    <div className="container data-of-movie">
                        <div className="row">
                            <div className="col">
                                <h3 className="titulli-filmit">{film.title}</h3>
                            </div>
                            <div className="col right-side">
                                <p className="viti"> <span className="bold">Viti:</span> {film.year}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col right-side">
                            <p > <span className="bold">Vleresimi:</span> {film.rating}/10</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                            <div className="kategorite-e-filmave">
                            {film.categories.map(category=>(
                            <p key={category.id}>
                                <Link to={"/category/"+ category.id}>
                                    {category.name}
                                </Link>
                            </p>
                            ))}
                            </div>
                            </div>
                            <div className="col right-side">
                                <p> <span className="bold">Koha:</span> {film.length} min</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col description">
                                <p>{film.description}</p> 
                            </div>
                        </div>
                           
                    </div>
                </div>
            ))}
            
        
        </div>
    )
}
export default Movie;