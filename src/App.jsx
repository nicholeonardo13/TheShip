import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import RocketPage from './pages/RocketPage/RocketPage';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Container, Form, FormControl, Nav, } from 'react-bootstrap'
import DetailRocketPage from './pages/DetailRocketPage/DetailRocketPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';


function App() {
  return (
    <>
    <Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    {/* <Navbar.Brand href="#home">SpAEx XYZ</Navbar.Brand> */}
                    <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">
                <img
                alt=""
                src="https://www.pinclipart.com/picdir/big/561-5617368_nickelodeon-rocket-ship-logo-self-development-icon-png.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                The Ship
                </Navbar.Brand>
                </Container>
                </Navbar>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/rockets">Ships</Nav.Link>
                            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                        </Nav>
                        <Nav>
                          <Navbar bg="dark" variant="dark">
                    <Container>
                      <Navbar.Brand>
                        <a href="http://instagram.com">
                        <img
                        alt=""
                        src="http://pngimg.com/uploads/instagram/instagram_PNG10.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top spacing-ig"
                        />
                        </a>
                        <a href="https://twitter.com">
                        <img
                        alt=""
                        src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top spacing-sosmed"
                        />
                        </a>
                        </Navbar.Brand>
                  </Container>
                </Navbar>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      <Switch>
      <Route path="/rockets/:id">
          <DetailRocketPage></DetailRocketPage>
        </Route>
      <Route path="/rockets">
          <RocketPage></RocketPage>
        </Route>
        <Route path="/favorites">
          <FavoritePage></FavoritePage>
        </Route>
        <Route path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </Router>
    </>
  );
}
export default App;
