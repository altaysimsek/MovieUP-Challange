import { Nav, Navbar, Container } from "react-bootstrap";
import Link from "next/link";
import styles from "../../styles/Navigation.module.scss";

import { useRouter } from "next/router";
import React, { useState } from "react";

function Navigation() {
    const router = useRouter();
    const [searchBoxInput,setSearchBoxInput] = useState("");
    
    const handleClick = (e) => {
        setSearchBoxInput("");
        if (searchBoxInput.trim() != "") {
            router.push({
                pathname: "/search",
                query: { name: searchBoxInput },
            });
            
        }
        setSearchBoxInput("");
    };
    
    return (
        <>
            <Navbar variant="light">
                <Container className="p-3">
                    <Link href="/">
                        <Navbar.Brand className="mr-5">
                            <img
                                src="image/movieLogo.png"
                                className="d-inline-block align-top"
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
                            onChange={(e) => setSearchBoxInput(e.target.value)}
                        ></input>
                        <i className="bx bx-search" onClick={handleClick}></i>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
