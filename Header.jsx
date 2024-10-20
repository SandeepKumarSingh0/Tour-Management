import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/images/logo (1).png';
import './header.css';

const nav__Links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ======= logo ======= */}
            <div className="logo">
              <Link to="/home">
                <img src={logo} alt="Company Logo" />
              </Link>
            </div>
            {/* ======= logo end ======= */}

            {/* ======= Menu Start ======= */}
            <nav className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__Links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink 
                      to={item.path} 
                      className={(navClass) => 
                        navClass.isActive ? 'active__link' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            {/* ======= Menu end ======= */}

            {/* ======= buttons ======= */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__buttons d-flex align-items-center gap-4">
                <Button className="secondary__btn" color="">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              <span className="mobaile__menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
            {/* ======= buttons end ======= */}
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
