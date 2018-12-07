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
        <div class="App-menu">
          <div class="ui tabular menu">
            <Link to="/" id="headlines-link" class="item"> Recent Headlines </Link>
            <Link to="/sources" id="sources-link" class="item"> Browse Stories </Link>
            <Link to="/search" id="search-link" class="item"> Search News </Link>
            <h1 id="title" class="ui header floated right item">NewsFeedr</h1>
          </div>
        </div>
        <div class="ui hidden divider"></div>
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
