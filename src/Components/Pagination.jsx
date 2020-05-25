import React from 'react'

const Pagination = ({moviesPerPage, totalMovies, paginate,previosPaginate}) => {
    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(totalMovies / moviesPerPage); i++){
        pageNumbers.push(i);
    }
    return (
           <div className="pagination justify-content-center">
      <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a  className="page-link" href="#">
                        <span aria-hidden="true">&laquo;</span>
                            Pas
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    
                    <li className="page-item">
                        <a className="page-link" href="#">
                            Tjetra
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li> 
                </ul>
            </nav>
      </div>
    )
}
export default Pagination;

