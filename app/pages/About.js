import React from 'react';
import { Row, Col, Navbar, Nav, Button, NavDropdown, Image, Breadcrumb, Card } from 'react-bootstrap';
import '../../web/style.css';

const About = (props) => {
    return(
        <div>
        <Navbar className="nav-bar rounded-bottom" expand="lg" sticky="top" >
        <Navbar.Brand href="#home">The Word</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Articles</Nav.Link>
            <Nav.Link href="#link">Poetry</Nav.Link>
            <Nav.Link href="#link">Illustrations</Nav.Link>
            <Nav.Link href="#link">Cartoons</Nav.Link>
            <Nav.Link href="#link">Short Words</Nav.Link>
            <NavDropdown title="Other" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Humor</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Criticisms</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Submit Video</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Donation</Nav.Link>
            </Nav>
        </Navbar.Collapse>
            <Button variant="outline-dark" size="md">Submit</Button>
        </Navbar>
        <section className="bg-img bg-overlay" style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2019/10/20/14/58/portrait-4563909_1280.jpg)", height: "15rem"}}>
        </section>
        <Breadcrumb className="sub-breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Articles</Breadcrumb.Item>
        </Breadcrumb>
    <Row style={{backgroundColor: "#f3f3f3", margin:0}}>
        <Col md={2}></Col>
        <Col md={6} className="detail-body bg-white">
            <Card.Title className="home-body-title">ABOUT US</Card.Title>
            <div>
            LOREM IPSUM GENERATOR
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
            </div>
        </Col>
        <Col md={2} className="home-body-right"></Col>
    </Row>
    <Row className="footer">
        <Col md={3} className="footer-items">
            The Word
        </Col>
        <Col md={3} className="footer-items">
            Instagram
            <div className="flex">
            <Image className="footer-instagram-items" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded></Image>
            <Image className="footer-instagram-items" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded></Image>
            <Image className="footer-instagram-items" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded></Image>
            </div>
            <div className="flex">
            <Image className="footer-instagram-items" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded></Image>
            <Image className="footer-instagram-items" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded></Image>
            <Image className="footer-instagram-items" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded></Image>
            </div>
        </Col>
        <Col md={2} className="footer-items">
            Accounts
            <ul>
                <li>Contact</li>
                <li>Donation</li>
            </ul>
        </Col>
        <Col md={3} className="footer-items">
            Intro
            <ul>
                <li>Contact</li>
                <li>Donation</li>
            </ul>
        </Col>
    </Row>
        </div>
    );
}

export default About;