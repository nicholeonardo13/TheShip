import './RocketPage.css'
import { gql, useQuery } from '@apollo/client'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col, Form, FormControl, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import FooterComponent from '../../components/FooterComponent/FooterComponent'



function RocketPage() {

    const [search, setSearch] = useState("");
    const [proxy, setProxy] = useState("");

    const ROCKETS_QUERY = gql`
        query {
            ships {
                id
                name
                image
                type
            }
        }
    `

    const { loading, error, data } = useQuery(ROCKETS_QUERY)

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    let userInput = search

    const handleInput = event => {
        setProxy(event.target.value)
        console.log(userInput)
    }

    const handleButton = () => {
        setSearch(proxy)
        console.log("sedang di search : " + userInput)
        
    }

    let rockets;

    // if(userInput === ""){
    //     console.log(data)
    //     rockets = data.ships
    // }else{
    //     for (let index = 0; index < data.ships.length; index++) {
    //         console.log(data.ships[index])
    //         if(data.ships[index].name === userInput){
    //             rockets = data.ships[index]
    //             console.log("Yang ketemu : " + rockets);
                
    //             return(
    //                 <>
    //                     <div className="search-container">
    //                         <Form className="d-flex">
    //                             <FormControl
    //                             type="search"
    //                             placeholder="Search"
    //                             className="mr-2"
    //                             aria-label="Search"
    //                             size="lg"
    //                             onChange={handleInput}
    //                             // value={valueInput}
    //                             />
    //                             <Button onClick={handleButton} className="spacing" variant="secondary">Search</Button>
    //                         </Form>
    //                     </div>
                    
    //                 <Row xs={4} md={4} className="g-4 spacing-rocket">
    //                     <Col>
    //                     <Card style={{ height: '100%' }}>
    //                         <Card.Img variant="top" src={rockets.image} />
    //                         <Card.Body>
    //                             <Card.Title>{rockets.name}</Card.Title>
    //                             <Card.Text>
    //                                 {rockets.type}
    //                             </Card.Text>
    //                             <Button as={Link} to={`/rockets/${rockets.id}`} variant="secondary">More Info</Button>
    //                         </Card.Body>
    //                     </Card>
    //                 </Col>
    //                 </Row>
    //             </>
    //             )
    //         }
            
    //     }
    // }

    

    return (
        <div className="rock-container">
        <div className="search-container">
            <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Input Ship Name"
                                className="mr-2"
                                aria-label="Search"
                                size="lg"
                                onChange={handleInput}
                                // value={valueInput}
                            />
                            <Button onClick={handleButton} className="spacing" variant="secondary">Search</Button>
                        </Form>
        </div>
        <Row xs={1} md={4} className="g-4 spacing-rocket spacing-row">
            {data.ships?.filter(rocket => search? rocket.name === search:true).map(rocket => {
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

export default RocketPage