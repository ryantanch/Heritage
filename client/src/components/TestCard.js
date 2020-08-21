import React from "react";
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const TestCard =(props) => (
    <Link to={props.link}>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imglink} alt="Card image" rounded/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
        </Card.Body>

    </Card>

    </Link>
)
