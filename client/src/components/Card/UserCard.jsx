import React from 'react';
import Card from 'react-bootstrap/Card';


import "./UserCard.css";

const UserCard = ({ firstname, lastname, email, pp }) => {
    return (

        <Card className='cardAll'>
            <Card.Body className='userCardBody'>
                {pp ? <Card.Img variant="top" className='cardImg' src={`${process.env.REACT_APP_BACK_URL}/${pp}`} /> : <div className="img_withoutprofil">
                    <p>
                        {firstname[0].toUpperCase()}-
                        {lastname[0].toUpperCase()}
                    </p>
                </div>}
                <Card.Title>{firstname} {lastname}</Card.Title>
                <Card.Text className="textinCard">
                    email : {email}
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default UserCard;
