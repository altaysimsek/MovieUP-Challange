import { Nav, Navbar, Container } from 'react-bootstrap';
import Link from 'next/link';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/Navigation.module.scss';

function Navigation() {
  const router = useRouter();
  const [searchBoxInput, setSearchBoxInput] = useState('');

  // Clean the input after search
  const handleClick = () => {
    setSearchBoxInput('');
    if (searchBoxInput.trim() !== '') {
      router.push({
        pathname: '/search',
        query: { name: searchBoxInput },
      });
    }
    setSearchBoxInput('');
  };
  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <Navbar variant="light">
        <Container className="p-3">
          <Link href="/">
            <Navbar.Brand className="mr-5">
              <img
                src="image/movieLogo.png"
                width="100%"
                className="d-inline-block align-top"
                style={{ cursor: 'pointer' }}
                alt="movieUP Logo"
              />
            </Navbar.Brand>
          </Link>
          <Nav className="mr-auto">
            <Link href="/"><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link href="/favorite"><Nav.Link href="#features">Favorite</Nav.Link></Link>
          </Nav>
          <div className={styles.searchbox}>
            <input
              type="text"
              placeholder="Enter movie name here"
              className="mr-5"
              name="searchbox"
              value={searchBoxInput}
              onKeyPress={handleEnterPress}
              onChange={(e) => setSearchBoxInput(e.target.value)}
            />
            <i className="bx bx-search" onClick={handleClick} />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
