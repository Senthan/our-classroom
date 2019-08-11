import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Our Classroom
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
  color: var(--mainWhite) !important
  font-size: 1.3 rem;
  text-transform: capitalize !important
}
`;