import React from 'react';
import { Row, Col, Navbar, Nav, Button, NavDropdown, Carousel, Media, Image, Card, Container } from 'react-bootstrap';
import { FaRegThumbsUp, FaEye, FaShareAlt } from 'react-icons/fa';

import '../../web/style.css';

const Home = (props) => {
    return(
        <div>
        <Navbar className="nav-bar rounded-bottom" expand="lg" sticky="top">
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
        <Carousel>
        <Carousel.Item className="max600">
            <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className="max600">
            <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2019/10/18/05/50/hull-4558298_1280.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  className="max600">
            <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2019/10/20/14/58/portrait-4563909_1280.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    <Row className="body-bg-color">
        <Col md={2}>
            <Card className="thumbnail-sidebar-card">
            <Card.Body>
                <Card.Title>MOST POPULAR</Card.Title>
                <Card.Text>
                    <Media className="thumbnail-sidebar-media">
                        <Image className="thumbnail-sidebar-media-image" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" thumbnail />
                            <Media.Body className="thumbnail-sidebar-media-body">
                                <div className="thumbnail-sidebar-media-title">Cras sit amet nibh libero, in gravida</div>
                                <div className="thumbnail-sidebar-media-username">username</div>
                            <div className="thumbnail-sidebar-media-buttons row">
                            <Button variant="link" className="visitButton" size="sm"><FaEye /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                            </div>
                            </Media.Body>
                    </Media>
                    <Media className="thumbnail-sidebar-media">
                        <Image className="thumbnail-sidebar-media-image" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" thumbnail />
                            <Media.Body className="thumbnail-sidebar-media-body">
                                <div className="thumbnail-sidebar-media-title">Cras sit amet nibh libero, in gravida</div>
                                <div className="thumbnail-sidebar-media-username">username</div>
                            <div className="thumbnail-sidebar-media-buttons row">
                            <Button variant="link" className="visitButton" size="sm"><FaEye /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                            </div>
                            </Media.Body>
                    </Media>
                    <Media className="thumbnail-sidebar-media">
                        <Image className="thumbnail-sidebar-media-image" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" thumbnail />
                            <Media.Body className="thumbnail-sidebar-media-body">
                                <div className="thumbnail-sidebar-media-title">Cras sit amet nibh libero, in gravida</div>
                                <div className="thumbnail-sidebar-media-username">username</div>
                            <div className="thumbnail-sidebar-media-buttons row">
                            <Button variant="link" className="visitButton" size="sm"><FaEye /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                            </div>
                            </Media.Body>
                    </Media>
                    <Media className="thumbnail-sidebar-media">
                        <Image className="thumbnail-sidebar-media-image" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" thumbnail />
                            <Media.Body className="thumbnail-sidebar-media-body">
                                <div className="thumbnail-sidebar-media-title">Cras sit amet nibh libero, in gravida</div>
                                <div className="thumbnail-sidebar-media-username">username</div>
                            <div className="thumbnail-sidebar-media-buttons row">
                            <Button variant="link" className="visitButton" size="sm"><FaEye /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                            </div>
                            </Media.Body>
                    </Media>
                    <Media className="thumbnail-sidebar-media">
                        <Image className="thumbnail-sidebar-media-image" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" thumbnail />
                            <Media.Body className="thumbnail-sidebar-media-body">
                                <div className="thumbnail-sidebar-media-title">Cras sit amet nibh libero, in gravida</div>
                                <div className="thumbnail-sidebar-media-username">username</div>
                            <div className="thumbnail-sidebar-media-buttons row">
                            <Button variant="link" className="visitButton" size="sm"><FaEye /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                            </div>
                            </Media.Body>
                    </Media>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card className="thumbnail-sidebar-card">
            <Card.Body>
                <Card.Title>MOST POPULAR</Card.Title>
                <Card.Text>
                <Media className="thumbnail-sidebar-media">
                        <Image className="thumbnail-sidebar-media-image" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" thumbnail />
                            <Media.Body className="thumbnail-sidebar-media-body">
                                <div className="thumbnail-sidebar-media-title">Cras sit amet nibh libero, in gravida</div>
                                <div className="thumbnail-sidebar-media-username">username</div>
                            <div className="thumbnail-sidebar-media-buttons row">
                            <Button variant="link" className="visitButton" size="sm"><FaEye /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                            </div>
                            </Media.Body>
                    </Media>
                    <Media className="thumbnail-sidebar-media">
                        <Image className="thumbnail-sidebar-media-image" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" thumbnail />
                            <Media.Body className="thumbnail-sidebar-media-body">
                                <div className="thumbnail-sidebar-media-title">Cras sit amet nibh libero, in gravida</div>
                                <div className="thumbnail-sidebar-media-username">username</div>
                            <div className="thumbnail-sidebar-media-buttons row">
                            <Button variant="link" className="visitButton" size="sm"><FaEye /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                            </div>
                            </Media.Body>
                    </Media>
                    <Media className="thumbnail-sidebar-media">
                        <Image className="thumbnail-sidebar-media-image" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" thumbnail />
                            <Media.Body className="thumbnail-sidebar-media-body">
                                <div className="thumbnail-sidebar-media-title">Cras sit amet nibh libero, in gravida</div>
                                <div className="thumbnail-sidebar-media-username">username</div>
                            <div className="thumbnail-sidebar-media-buttons row">
                            <Button variant="link" className="visitButton" size="sm"><FaEye /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                            </div>
                            </Media.Body>
                    </Media>
                    <Media className="thumbnail-sidebar-media">
                        <Image className="thumbnail-sidebar-media-image" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" thumbnail />
                            <Media.Body className="thumbnail-sidebar-media-body">
                                <div className="thumbnail-sidebar-media-title">Cras sit amet nibh libero, in gravida</div>
                                <div className="thumbnail-sidebar-media-username">username</div>
                            <div className="thumbnail-sidebar-media-buttons row">
                            <Button variant="link" className="visitButton" size="sm"><FaEye /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                            </div>
                            </Media.Body>
                    </Media>
                    <Media className="thumbnail-sidebar-media">
                        <Image className="thumbnail-sidebar-media-image" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" thumbnail />
                            <Media.Body className="thumbnail-sidebar-media-body">
                                <div className="thumbnail-sidebar-media-title">Cras sit amet nibh libero, in gravida</div>
                                <div className="thumbnail-sidebar-media-username">username</div>
                            <div className="thumbnail-sidebar-media-buttons row">
                            <Button variant="link" className="visitButton" size="sm"><FaEye /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span className="thumbnail-sidebar-media-button">22</span></Button>
                            <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                            </div>
                            </Media.Body>
                    </Media>
                </Card.Text>
            </Card.Body>
            </Card>
    </Col>
        <Col md={7} className="home-body-container"> 
            <Card.Title className="home-body-title">CARD TİTLE</Card.Title>
            <div className="card-deck home-body-posts">
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            </div>
           
            <Card.Title className="home-body-title">CARD TİTLE</Card.Title>
            <div className="card-deck home-body-posts">
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            </div>
            <Card.Title className="home-body-title">CARD TİTLE</Card.Title>
            <div className="card-deck home-body-posts">
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            </div>
            <Card.Title className="home-body-title">CARD TİTLE</Card.Title>
            <div className="card-deck home-body-posts">
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            </div>
            <Card.Title className="home-body-title">CARD TİTLE</Card.Title>
            <div className="card-deck home-body-posts">
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            </div>
            <Card.Title className="home-body-title">CARD TİTLE</Card.Title>
            <div className="card-deck home-body-posts">
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Img md={10} sm={5} className="rounded home-body-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" />
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            </div>
            
            <Card.Title className="home-body-title">CARD TİTLE</Card.Title>
            <div className="card-deck home-body-posts">
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
            <Card className="card mb-3 p-2 home-body-post">
            <Card.Body className="home-body-post-body col" md={10} sm={5}>
                    <div className="row">
                    <div className="home-body-post-date col">'19 Tem</div>
                    <div className="home-body-post-username text-right col">
                        username</div>
                    </div>
                    <div className="home-body-post-title">Cras sit amet nibh libero, in gravida nulla</div>
                    <div className="home-body-post-buttons row">
                    <Button variant="link" className="visitButton" size="sm"><FaEye /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="likeButton" size="sm"><FaRegThumbsUp /><span style={{fontSize: '0.7rem', padding: '0.1rem 0 0 0.1rem'}}>22</span></Button>
                    <Button variant="link" className="shareButton" size="sm"><FaShareAlt /></Button>
                    </div>
            </Card.Body>
            </Card>
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

export default Home;