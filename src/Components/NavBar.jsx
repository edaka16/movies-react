import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import { Navbar,Nav,Form,FormControl,NavDropdown, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavBar =(props) => {
    const [kategorite, setKategorite] = useState([]);

    const fetchCategory = async () =>{
        const res= await Axios.get('https://admin.newfilma.com/api/categories');
        setKategorite(res.data);
   }

    useEffect(()=>{
        fetchCategory();
    }, []);

    console.log(kategorite);

    return (
     
        <div className="row">
                    <div className="col-md-12">
               
                            <Navbar  variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">XhimiFilma</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>

                                    {(kategorite && Array.isArray(kategorite) && kategorite.length>0)
                                    ? 
                                     <NavDropdown href="/kategorite" title="Kategorite" id="basic-nav-dropdown" className="category">
                                                                          
                                            {kategorite.map(kategori =>(
                                                
                                                    <NavDropdown.Item className="kategori" key={kategori.id}>
                                                      <Link to={"/category/"+ kategori.id}>
                                                           {kategori.name}
                                                       </Link>
                                                    </NavDropdown.Item>
                                               
                                        ))}
                                    </NavDropdown>
                                    : <h1>Category not found</h1>
                                    }
                                    <Nav.Link href="/seriale">Seriale</Nav.Link>
                                    <Nav.Link href="/muzike">Muzike</Nav.Link>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                           
                    </div>
                </div>
       
    );

}

export default NavBar;