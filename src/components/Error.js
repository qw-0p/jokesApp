import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ErrorPage } from '../styled/Error';

export const Error = () => (
    <ErrorPage>
        <Row>Page not found</Row>
        <Row>
            <Link to='/'>Home</Link>
        </Row>
    </ErrorPage>
);
