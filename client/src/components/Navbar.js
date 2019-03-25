import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';

const Navbar = () => (
  <Menu inverted >
    <Menu.Item
      as={NavLink}
      exact
      to='/'
      content='Home'
    />
    <Menu.Item
      as={NavLink}
      exact
      to='/posts'
      content='Post Index'
    />
  </Menu>
);

export default Navbar;