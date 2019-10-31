import React from 'react';
import { Row, Col, Navbar, Nav, Button, NavDropdown, Media, Image, Breadcrumb, Pagination } from 'react-bootstrap';
import { FaRegThumbsUp, FaEye, FaShareAlt } from 'react-icons/fa';

import '../../web/style.css';

const Articles = (props) => {
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
        <Col md={6} className="articles-body bg-white">
            <Media className="articles-body-media">
            <Image className="articles-body-media-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded />
                <Media.Body className="articles-media-body articles-body-media-body">
                        <div className="row">
                        <div className="articles-body-media-date col">'19 Tem</div>
                        <div className="articles-body-media-user text-right col">
                            <Image className="articles-body-media-user-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" roundedCircle />
                            username</div>
                        </div>
                    <div className="articles-media-body-title text-center">
                    <h5>Media Heading Media Heading Media Heading Media Heading Media</h5>
                    </div>
                    <div className="articles-media-body-imp text-center">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                    </div>
                    <div className="articles-media-body-buttons justify-content-center row">
                                <Button variant="link" className="visitButton" size="md"><FaEye /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="likeButton" size="md"><FaRegThumbsUp /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="shareButton" size="md"><FaShareAlt /></Button>
                    </div>
                </Media.Body>
            </Media>
           
            <Media className="articles-body-media">
            <Image className="articles-body-media-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded />
                <Media.Body className="articles-media-body articles-body-media-body">
                        <div className="row">
                        <div className="articles-body-media-date col">'19 Tem</div>
                        <div className="articles-body-media-user text-right col">
                            <Image className="articles-body-media-user-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" roundedCircle />
                            username</div>
                        </div>
                    <div className="articles-media-body-title text-center">
                    <h5>Media Heading Media Heading Media Heading Media Heading Media</h5>
                    </div>
                    <div className="articles-media-body-imp text-center">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                    </div>
                    <div className="articles-media-body-buttons justify-content-center row">
                                <Button variant="link" className="visitButton" size="md"><FaEye /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="likeButton" size="md"><FaRegThumbsUp /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="shareButton" size="md"><FaShareAlt /></Button>
                    </div>
                </Media.Body>
            </Media>
            <Media className="articles-body-media">
            <Image className="articles-body-media-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded />
                <Media.Body className="articles-media-body articles-body-media-body">
                        <div className="row">
                        <div className="articles-body-media-date col">'19 Tem</div>
                        <div className="articles-body-media-user text-right col">
                            <Image className="articles-body-media-user-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" roundedCircle />
                            username</div>
                        </div>
                    <div className="articles-media-body-title text-center">
                    <h5>Media Heading Media Heading Media Heading Media Heading Media</h5>
                    </div>
                    <div className="articles-media-body-imp text-center">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                    </div>
                    <div className="articles-media-body-buttons justify-content-center row">
                                <Button variant="link" className="visitButton" size="md"><FaEye /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="likeButton" size="md"><FaRegThumbsUp /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="shareButton" size="md"><FaShareAlt /></Button>
                    </div>
                </Media.Body>
            </Media>
            <Media className="articles-body-media">
            <Image className="articles-body-media-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded />
                <Media.Body className="articles-media-body articles-body-media-body">
                        <div className="row">
                        <div className="articles-body-media-date col">'19 Tem</div>
                        <div className="articles-body-media-user text-right col">
                            <Image className="articles-body-media-user-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" roundedCircle />
                            username</div>
                        </div>
                    <div className="articles-media-body-title text-center">
                    <h5>Media Heading Media Heading Media Heading Media Heading Media</h5>
                    </div>
                    <div className="articles-media-body-imp text-center">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                    </div>
                    <div className="articles-media-body-buttons justify-content-center row">
                                <Button variant="link" className="visitButton" size="md"><FaEye /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="likeButton" size="md"><FaRegThumbsUp /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="shareButton" size="md"><FaShareAlt /></Button>
                    </div>
                </Media.Body>
            </Media>
            <Media className="articles-body-media">
            <Image className="articles-body-media-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded />
                <Media.Body className="articles-media-body articles-body-media-body">
                        <div className="row">
                        <div className="articles-body-media-date col">'19 Tem</div>
                        <div className="articles-body-media-user text-right col">
                            <Image className="articles-body-media-user-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" roundedCircle />
                            username</div>
                        </div>
                    <div className="articles-media-body-title text-center">
                    <h5>Media Heading Media Heading Media Heading Media Heading Media</h5>
                    </div>
                    <div className="articles-media-body-imp text-center">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                    </div>
                    <div className="articles-media-body-buttons justify-content-center row">
                                <Button variant="link" className="visitButton" size="md"><FaEye /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="likeButton" size="md"><FaRegThumbsUp /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="shareButton" size="md"><FaShareAlt /></Button>
                    </div>
                </Media.Body>
            </Media>
            <Media className="articles-body-media">
            <Image className="articles-body-media-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded />
                <Media.Body className="articles-media-body articles-body-media-body">
                        <div className="row">
                        <div className="articles-body-media-date col">'19 Tem</div>
                        <div className="articles-body-media-user text-right col">
                            <Image className="articles-body-media-user-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" roundedCircle />
                            username</div>
                        </div>
                    <div className="articles-media-body-title text-center">
                    <h5>Media Heading Media Heading Media Heading Media Heading Media</h5>
                    </div>
                    <div className="articles-media-body-imp text-center">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                    </div>
                    <div className="articles-media-body-buttons justify-content-center row">
                                <Button variant="link" className="visitButton" size="md"><FaEye /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="likeButton" size="md"><FaRegThumbsUp /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="shareButton" size="md"><FaShareAlt /></Button>
                    </div>
                </Media.Body>
            </Media>
            <Media className="articles-body-media">
            <Image className="articles-body-media-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded />
                <Media.Body className="articles-media-body articles-body-media-body">
                        <div className="row">
                        <div className="articles-body-media-date col">'19 Tem</div>
                        <div className="articles-body-media-user text-right col">
                            <Image className="articles-body-media-user-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" roundedCircle />
                            username</div>
                        </div>
                    <div className="articles-media-body-title text-center">
                    <h5>Media Heading Media Heading Media Heading Media Heading Media</h5>
                    </div>
                    <div className="articles-media-body-imp text-center">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                    </div>
                    <div className="articles-media-body-buttons justify-content-center row">
                                <Button variant="link" className="visitButton" size="md"><FaEye /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="likeButton" size="md"><FaRegThumbsUp /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="shareButton" size="md"><FaShareAlt /></Button>
                    </div>
                </Media.Body>
            </Media>
            <Media className="articles-body-media">
            <Image className="articles-body-media-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded />
                <Media.Body className="articles-media-body articles-body-media-body">
                        <div className="row">
                        <div className="articles-body-media-date col">'19 Tem</div>
                        <div className="articles-body-media-user text-right col">
                            <Image className="articles-body-media-user-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" roundedCircle />
                            username</div>
                        </div>
                    <div className="articles-media-body-title text-center">
                    <h5>Media Heading Media Heading Media Heading Media Heading Media</h5>
                    </div>
                    <div className="articles-media-body-imp text-center">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                    </div>
                    <div className="articles-media-body-buttons justify-content-center row">
                                <Button variant="link" className="visitButton" size="md"><FaEye /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="likeButton" size="md"><FaRegThumbsUp /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="shareButton" size="md"><FaShareAlt /></Button>
                    </div>
                </Media.Body>
            </Media>
            <Media className="articles-body-media">
            <Image className="articles-body-media-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" rounded />
                <Media.Body className="articles-media-body articles-body-media-body">
                        <div className="row">
                        <div className="articles-body-media-date col">'19 Tem</div>
                        <div className="articles-body-media-user text-right col">
                            <Image className="articles-body-media-user-img" src="https://cdn.pixabay.com/photo/2019/10/19/13/00/autumn-forest-4561344_1280.jpg" roundedCircle />
                            username</div>
                        </div>
                    <div className="articles-media-body-title text-center">
                    <h5>Media Heading Media Heading Media Heading Media Heading Media</h5>
                    </div>
                    <div className="articles-media-body-imp text-center">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                    </div>
                    <div className="articles-media-body-buttons justify-content-center row">
                                <Button variant="link" className="visitButton" size="md"><FaEye /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="likeButton" size="md"><FaRegThumbsUp /><span className="articles-media-body-button">22</span></Button>
                                <Button variant="link" className="shareButton" size="md"><FaShareAlt /></Button>
                    </div>
                </Media.Body>
            </Media>
            <Pagination className="justify-content-center">
                <Pagination.Item key={1}>
                {1}
                </Pagination.Item>
                <Pagination.Item key={2}>
                {2}
                </Pagination.Item>
                <Pagination.Item key={3}>
                {3}
                </Pagination.Item>
                <Pagination.Item key={4}>
                {4}
                </Pagination.Item>
            </Pagination>
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

export default Articles;