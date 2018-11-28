import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeadlinesContainer from '../../containers/HeadlinesContainer'
import SourcesContainer from '../../containers/SourcesContainer'
import CategoriesContainer from '../../containers/CategoriesContainer'

const Headline = () => <h2>Headlines</h2>
const Source = () => <h2>Search Sources</h2>
const Category =() => <h2>Browse Categories</h2>

const Navbar = () => {
  return(
    <Router>
      <div>
        <Link to="/"> Headlines </Link>
        <Link to="/sources"> Search Sources </Link>
        <Link to="/categories"> Browse Categories </Link>

        <Route exact path="/" component={HeadlinesContainer} />
        <Route exact path="/sources" component={SourcesContainer} />
        <Route exact path="/categories" component={CategoriesContainer} />
      </div>
    </Router>
  )
}

export default Navbar;
