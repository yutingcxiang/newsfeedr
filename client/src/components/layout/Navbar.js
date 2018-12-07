import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HeadlinesContainer from '../../containers/HeadlinesContainer';
import SourcesContainer from '../../containers/SourcesContainer';
import SearchContainer from '../../containers/SearchContainer';
import SourceArticlesContainer from '../../containers/SourceArticlesContainer';

const Navbar = () => {
  const uuidv4 = require('uuid/v4');

  return(
    <Router>
      <div>
        <div className="App-menu">
          <div className="ui tabular menu">
            <Link to="/" id="headlines-link" className="item"> Recent Headlines </Link>
            <Link to="/sources" id="sources-link" className="item"> Browse Stories </Link>
            <Link to="/search" id="search-link" className="item"> Search News </Link>
            <h1 id="title" className="ui header floated right item">NewsFeedr</h1>
          </div>
        </div>
        <div className="ui hidden divider"></div>
        <Route exact path="/" component={HeadlinesContainer} />
        <Route exact path="/sources" component={SourcesContainer} />
        <Route exact path="/sources/:id" component={SourceArticlesContainer} />
        <Route exact path="/search" component={SearchContainer} />
        <Route exact path="/search/:query" component={SearchContainer} />
    </div>
    </Router>
  )
}

export default Navbar;
