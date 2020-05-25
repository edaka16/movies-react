import React from 'react'
import { Link,useHistory } from 'react-router-dom'

const Pagination = ({ last_page, current_page, setPage}) => {

    const history = useHistory();
    const handleChange = (pageNr)=>{
        setPage(pageNr);
        history.push(`/?page=${pageNr}`)
    }

    return (
    <div className="pagination justify-content-center">
        <nav>
            <ul className="pagination justify-content-center">
                {current_page> 1&&
                    <li className="page-item">
                        <button className="page-link" onClick={() => handleChange(current_page - 1)} >
                            <span aria-hidden="true">&laquo;</span> Pas
                        </button>
                    </li>
                }
                    <li className="page-item"><a className="page-link">{current_page}</a></li>
                    {current_page <= last_page&&
                <li className="page-item">
                        <button className="page-link" onClick={() => handleChange(current_page + 1)} >
                        Tjetra
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                    </li> }
            </ul>
        </nav>
    </div>
    )
}
export default Pagination;

