import React,{ useState, useEffect } from 'react'
import {
    useParams
  } from "react-router-dom";
import Axios from 'axios';
import Movies from './Movies';
import Pagination from './Pagination';

 const CategoryMovies = ({}) => {
    let { id } = useParams();
  
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMoviesCategory = async () =>{
        setLoading(true)
        const res= await Axios.get('https://admin.newfilma.com/api/categories/'+id);

        setCategory(res.data)
        setLoading(false)
    }

    useEffect(()=>{
        
        fetchMoviesCategory();
    }, [id]);
 
    
    if(loading) {
        return <h3 className="loading-category">Loading...</h3>
    }

    
    return (
        <div className="home">
            <div className="container">
                {(category.movies && category.movies.data && Array.isArray(category.movies.data) && category.movies.data.length>0)
                ?
                    <div>
                        <div className="filma" >
                            <p className="te-fundit-me-te-shikuarit">
                                {category.category.name}
                                <a href="#">Te fundit</a>
                                <a href="#">Me te shikuarit</a>
                            </p>
                        </div>
                        <Movies 
                        movies ={category.movies.data}
                        
                        loading={loading}
                        />
                       <Pagination />
                       </div>
            :
            <h3>Movies not found</h3>
            }   
            
            </div>
        </div>    
    )
}
export default CategoryMovies;