import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Posts from './components/Posts';
import PostView from './components/PostView';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/posts/:id' component={PostView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App