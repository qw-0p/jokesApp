import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { JokesForm, Filter, List, Loader } from '.';
import { Wrapper } from '../styled/Home';

export const Home: React.FC = () => (
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
