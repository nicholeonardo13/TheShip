import { Card, Col, Row , Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

import './HomePage.css'


function HomePage() {
    return (
        <div className="home-container">
            <Carousel fade interval={4000} pause={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/ship1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>The Best Ship In Town</h3>
                        <p>Post Training React LELE</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/ship2.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Number One Ship</h3>
                        <p>Try New Things, Overcome All Problems</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/ship3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Big White Great Ships</h3>
                        <p>Imagination Is More Important Than Knowledge</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="fav-container">

        <div className="title-fav">
            <h2 style={{color: "gray"}}>Our Top Ships</h2>
        </div>

        <Row xs={1} md={4} className="g-4 spacing-rocket spacing-row">
                    <Col>
                        <Card style={{ height: '28rem' , backgroundSize: 'cover' , width: '100%'}}>
                            <Card.Img variant="top" style={{height: '50%'}} src="https://i.imgur.com/MjNWzhO.jpg" />
                            <Card.Body>
                                <Card.Title>GO Navigator</Card.Title>
                                <Card.Text>
                                GONAVIGATOR
                                </Card.Text>
                                <div className="d-grid gap-2">
                                <Button size="lg" as={Link} to={`/rockets/add`} variant="secondary">More Info</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ height: '28rem' , backgroundSize: 'cover' , width: '100%'}}>
                            <Card.Img variant="top" style={{height: '50%'}} src="https://i.imgur.com/GvtuYUN.jpg" />
                            <Card.Body>
                                <Card.Title>NRC Quest</Card.Title>
                                <Card.Text>
                                    Cargo
                                </Card.Text>
                                <div className="d-grid gap-2">
                                <Button size="lg" as={Link} to={`/rockets/NRCQUEST`} variant="secondary">More Info</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ height: '28rem' , backgroundSize: 'cover' , width: '100%'}}>
                            <Card.Img variant="top" style={{height: '50%'}} src="https://i.imgur.com/eJWx70Z.jpg" />
                            <Card.Body>
                                <Card.Title>Pacific Freeedom</Card.Title>
                                <Card.Text>
                                    Tug
                                </Card.Text>
                                <div className="d-grid gap-2">
                                <Button size="lg" as={Link} to={`/rockets/PACIFICFREEDOM`} variant="secondary">More Info</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ height: '28rem' , backgroundSize: 'cover' , width: '100%'}}>
                            <Card.Img variant="top" style={{height: '50%'}} src="https://imgur.com/NHsx95l.jpg" />
                            <Card.Body>
                                <Card.Title>GO Ms Chief</Card.Title>
                                <Card.Text>
                                High Speed Craft
                                </Card.Text>
                                <div className="d-grid gap-2">
                                <Button size="lg" as={Link} to={`/rockets/GOMSCHIEF`} variant="secondary">More Info</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
        </Row>
        </div>

            <FooterComponent></FooterComponent>
        </div>
    )
}

export default HomePage