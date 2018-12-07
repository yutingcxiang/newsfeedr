import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeadlinesContainer from '../../containers/HeadlinesContainer';
import SourcesContainer from '../../containers/SourcesContainer';
import SearchContainer from '../../containers/SearchContainer';
import SourceArticlesContainer from '../../containers/SourceArticlesContainer';

const Navbar = () => {
  return(
    <Router>
      <div>
        <Link to="/"> Recent Headlines </Link>
        <Link to="/sources"> Browse Stories </Link>
        <Link to="/search"> Search News </Link>

        <Route exact path="/" component={HeadlinesContainer} />
        <Route exact path="/sources" component={SourcesContainer} />
        <Route exact path="/search" component={SearchContainer} />
        <Route path="/sources/:id" component={SourceArticlesContainer}/>
        <Route path="/search/:query" component={SearchContainer}/>
      </div>
    </Router>
  )
}

export default Navbar;
