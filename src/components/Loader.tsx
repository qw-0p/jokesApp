import React from 'react';
import { Row, Spinner, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const Loader: React.FC = () => {
    const loader = useSelector((state: RootState) => state.app.loading);
    return (
        <Row className='text-center'>
            <Col>{loader && <Spinner variant='primary' animation='border' />}</Col>
        </Row>
    );
};
