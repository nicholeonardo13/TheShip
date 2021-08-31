import './FavoritePage.css'
import { gql, useQuery } from '@apollo/client'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import FooterComponent from '../../components/FooterComponent/FooterComponent'


function FavoritePage() {
    const [fav, setFav] = useState([]);
    const check = JSON.parse(localStorage.getItem("favoriteku")) ?? []

    // console.log(data)
    // const rockets = data.ships


    const handleButton = value => () => {

        for (let index = 0; index < check.length; index++) {
            if (check[index].id === value) {
                check.splice(index, 1);
                localStorage.setItem("favoriteku", JSON.stringify(check))
            }
        }
        // localStorage.clear()
        setFav(value)

    }

    return (
        <div className="fav-container">

        <div className="title-fav">
            <h2 style={{color: "gray"}}>My Favorites</h2>
        </div>

        <Row xs={1} md={4} className="g-4 spacing-rocket spacing-row">
            {check?.map(rocket => {
                return (
                    <Col>
                        <Card style={{ height: '28rem' , backgroundSize: 'cover' , width: '100%'}}>
                            <Card.Img variant="top" style={{height: '50%'}} src={rocket.image} />
                            <Card.Body>
                                <Card.Title>{rocket.name}</Card.Title>
                                <Card.Text>
                                    {rocket.type}
                                </Card.Text>
                                <div className="d-grid gap-2">
                                <Button size="lg" as={Link} to={`/rockets/${rocket.id}`} variant="secondary">More Info</Button>
                                <Button size="lg" onClick={handleButton(rocket.id)} className="button-remove-favorite" variant="danger">Remove From Favorites</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
        <FooterComponent></FooterComponent>
        </div>
    )

}

export default FavoritePage