import React from 'react';
import { Row, Spinner, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const Loader = () => {
    const loader = useSelector((state) => state.app.loading);
    return (
        <Row className='text-center'>
            <Col>{loader && <Spinner variant='primary' animation='border' size='md' />}</Col>
        </Row>
    );
};
