import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Movies from './Movies';
import Pagination from './Pagination';

const Home = () => {    

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    let urlPageNr = 1

    if (getParameterByName('page', window.location.href)){
        urlPageNr = getParameterByName('page', window.location.href)
    }

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNr, setPage] = useState(urlPageNr);
    
    const fetchMovies = async () =>{
        setLoading(true);
        const res = await Axios.get(`https://admin.newfilma.com/api/movies?page=${pageNr}`);
        setMovies(res.data); 
        setLoading(false); 
    }

    useEffect(()=>{ 
        fetchMovies(); 
    }, [pageNr]);

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
                movies={movies.data} 
                loading={loading}
                />
                <Pagination 
                    setPage={setPage}
                    current_page={movies.current_page}
                    last_page={movies.last_page}
                 />
            </div>
        </div>
    )
}

export default Home;