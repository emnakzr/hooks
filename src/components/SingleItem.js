import React from 'react';
import { Card, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function SingleMovie({ movie }) {





    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
                <Card.Text>
                    {movie && movie.Title}
                </Card.Text>
                <Link to={`/MoviesLIst/${movie.id}`}>
                    <Button variant="primary">see details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default SingleMovie