import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { JokesForm } from './JokesForm';
import { Filter } from './Filter';
import { List } from './List';
import { Loader } from './Loader';
import { Wrapper } from '../styled/Home';

export const Home = () => (
    <Wrapper fluid>
        <Row>
            <Col>
                <Filter />
            </Col>
        </Row>
        <Row>
            <Col>
                <List />
                <Loader />
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <JokesForm />
        </Row>
    </Wrapper>
);
