import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DetailCard = ({CardTitle,discriptionS}) => {
  return (
    <div>
        <Card  >
      <Card.Img variant="top" src=" https://plantsguru.com/cdn/shop/files/Rose_Baby_Pink.jpg?v=1758804477"
      width="20px"
      />
      <Card.Body>
        <Card.Title> {CardTitle}</Card.Title>
        <Card.Text>
           {discription}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default DetailCard

