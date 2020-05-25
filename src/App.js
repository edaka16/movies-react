import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Seriale from './Components/Seriale';
import Muzike from './Components/Muzike';
import NavBar from './Components/NavBar';
import Movie from './Components/Movie';
import CategoryMovies from './Components/CategoryMovies';

class App extends React.Component {


  render() {  
    
    return (
     
      <Router>
     <NavBar 
     />
     <Switch>
    
        <Route exact path="/">
          <Home />
        </Route>
         <Route path="/seriale">
            <Seriale />
          </Route>
          <Route path="/muzike">
              <Muzike />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/category/:id">
            <CategoryMovies />
          </Route>
       </Switch> 
       </Router>
    )
  }
}

export default App;
