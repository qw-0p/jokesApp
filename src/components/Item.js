import React from 'react';
import { Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { JokePage } from '../styled/Item';

export const Item = () => {
    const location = useLocation();
    return (
        <JokePage>
            <Row>{location.state.item.joke}</Row>
            <Row>
                <Link to='/'>Back</Link>
            </Row>
        </JokePage>
    );
};
