import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Movies from './Movies';
import Pagination from './Pagination';

const Home = () => {
    const [movies, setMovies] = useState([]); 
    const [loading, setLoading] = useState(false);
  
    const fetchMovies = async () =>{
        setLoading(true);
        const res = await Axios.get('https://admin.newfilma.com/api/movies');
        setMovies(res.data.data); 
        setLoading(false); 
    }

    useEffect(()=>{ 
        
        fetchMovies(); 
    }, []);

    console.log(movies);
    return(
        <div className="home">
            <div className="container ">
            <div className="filma" >
                    <p className="te-fundit-me-te-shikuarit">
                        FILMAT E FUNDIT
                        <a href="#">Te fundit</a>
                        <a href="#">Me te shikuarit</a>
                    </p>
                </div>
               <Movies
                movies={movies} 
                loading={loading}
                />
               <Pagination 

               />
            </div>
        </div>
    )
}

export default Home;