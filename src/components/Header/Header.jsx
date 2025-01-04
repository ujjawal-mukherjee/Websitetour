import React, { useRef, useEffect } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.css';

const nav__links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Locations' },
  { path: '/intrest', display: 'Destinations by Interest' },
  { path: '/places', display: 'Places to stay' },
  { path: '/services', display: 'Services' }
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Ensure that .page-content exists before modifying its style
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      pageContent.style.marginTop = `${headerHeight}px`;
    }
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
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
            </div>

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to={'/login'}>Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to={'/register'}>Register</Link>
                </Button>
              </div>
              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
