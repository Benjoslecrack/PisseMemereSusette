import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from '../../components/Card/UserCard';
import "./AllUser.css"
import Row from 'react-bootstrap/Row';

export default function AllUser() {
    const [userCard, setUserCard] = useState([]);

    useEffect(() => {
        axios
            .get("api/users/get/all")
            .then(({ data }) => {
                console.log("data all users", data)
                setUserCard(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <div>

            <div className="usercomponents">
                <Row xs={1} lg={3}>
                    {userCard.length > 0
                        ? userCard.map((i) => <UserCard {...i} />)
                        : null}

                </Row>
            </div>
        </div>
    )
}
