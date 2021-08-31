import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import './DetailRocketPage.css'
import { gql, useQuery } from '@apollo/client'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react'
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import FooterComponent from "../../components/FooterComponent/FooterComponent"

function DetailRocketPage() {
    let { id } = useParams();
    const [fav, setFav] = useState([]);


    const ROCKET_QUERY = gql`
        query GetShip($i: ID!){
            ship(id: $i) {
                id
                image
                name
                roles
                home_port
                type
                url
                weight_kg
                year_built
            }
        }
    `

    const { loading, error, data } = useQuery(ROCKET_QUERY, {
        variables: {
            i: id
        }
    })

    if (loading) return <LoadingSpinner></LoadingSpinner>
    // console.log(id)
    // console.log(error)
    // console.log(data)

    const rocket = data.ship

    const check = JSON.parse(localStorage.getItem("favoriteku")) ?? []
    const isFavorited = check.some(c => c.id === id)

    if (!isFavorited) {
        var setButton = "success"
        var setTitleButton = "Add To Favorites"
    } else {
        var setButton = "danger"
        var setTitleButton = "Remove From Favorites"
    }


    const handleButton = () => {

        const f = JSON.parse(localStorage.getItem("favoriteku")) ?? []
        console.log(f)
        if (isFavorited) {
            console.log(check[0])
            console.log(f)
            console.log("terhapus")
            for (let index = 0; index < check.length; index++) {
                if (check[index].id === id) {
                    check.splice(index, 1);
                    localStorage.setItem("favoriteku", JSON.stringify(check))
                }
            }
            // localStorage.clear()
            setFav("terhapus")
        } else {
            setFav(rocket)
            localStorage.setItem("favoriteku", JSON.stringify([...f, rocket]))
        }

    }

    return (
        <div className="rocket-container" style={{position: "relative"}}>
            <Card style={{ width: '80rem' }} className="rocket-card">
                <Card.Img variant="top" src={rocket.image} />
                <Card.Body>
                    <Card.Title>{rocket.name}</Card.Title>
                    <Card.Text>
                        {rocket.type}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Weight (KG) : {rocket.weight_kg}</ListGroupItem>
                    <ListGroupItem>Year Built  : {rocket.year_built}</ListGroupItem>
                    <ListGroupItem>Roles       : {rocket.roles}</ListGroupItem>
                    <ListGroupItem>Home Port   : {rocket.home_port}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <a href={rocket.url}><Button variant="primary">Visit Link</Button></a>
                    <Button onClick={handleButton} className="button-add-favorite" variant={setButton}>{setTitleButton}</Button>
                </Card.Body>
            </Card>
            <FooterComponent></FooterComponent>
        </div>
    )

}

export default DetailRocketPage