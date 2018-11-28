import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeadlinesContainer from '../../containers/HeadlinesContainer'
import FiltersContainer from '../../containers/FiltersContainer'
import ArticlesContainer from '../../containers/ArticlesContainer'

const Navbar = () => {
  return(
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/search">Search News</Link>
        <Route exact path="/" component={HeadlinesContainer} />
        <Route exact path="/search" component={FiltersContainer} />
        <Route exact path="/results" component={ArticlesContainer} />
      </div>
    </Router>
  )
}

export default Navbar;
