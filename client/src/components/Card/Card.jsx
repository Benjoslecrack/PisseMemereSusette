import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React from "react";
import Badge from 'react-bootstrap/Badge';

import "./Card.css"

function CardComponent() {
    return (
        <div className="container">
       
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                        <Card className='cardAll'>
                            <Card.Img variant="top" className='cardImg' src="https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_960_720.jpg" />
                            <Card.Body className='cardBody'>
                                <Badge pill className="badgeItemss">
                                    Success
                                </Badge>{' '}
                                <Card.Title>Card title</Card.Title>
                                <Card.Text className="textinCard">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>

                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
       
        </div>
    );
}

export default CardComponent;