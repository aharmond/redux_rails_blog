import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import FetchPosts from './components/FetchPosts';
import { Container, } from 'semantic-ui-react';
import Helmet from 'react-helmet';

const App = () => (
  <Fragment>
    <Helmet bodyAttributes={{style: 'background-color : #2e333a'}} />
    <Container>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts' component={FetchPosts} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App