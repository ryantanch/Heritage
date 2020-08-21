import React from 'react';
import './ArtifactCard.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CategoryCard = props => (
  <Link to={props.link}>


  <Card>

    <Card.Body>
       
      <Card.Title>{props.title}</Card.Title>
  
    </Card.Body>
  </Card>

  

   </Link>
);
