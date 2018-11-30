import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeadlinesContainer from '../../containers/HeadlinesContainer'
import SourcesContainer from '../../containers/SourcesContainer'
import SearchContainer from '../../containers/SearchContainer'

const Navbar = () => {
  return(
    <Router>
      <div>
        <Link to="/"> Headlines </Link>
        <Link to="/sources"> Browse Stories </Link>
        <Link to="/search"> Search News </Link>

        <Route exact path="/" component={HeadlinesContainer} />
        <Route exact path="/sources" component={SourcesContainer} />
        <Route exact path="/search" component={SearchContainer} />
      </div>
    </Router>
  )
}

export default Navbar;
