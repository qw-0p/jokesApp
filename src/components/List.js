import React, { useState } from 'react';
import { Container, Card, Row, Modal, Button } from 'react-bootstrap';
import { v4 } from 'uuid';
import { useSelector } from 'react-redux';
import { StyledCol, StyledCard, StyledNavLink, EmptyList } from '../styled/List';
import { Item } from './Item';
import { Home } from './Home';
import { Link, useLocation } from 'react-router-dom';

export const List = () => {
    let location = useLocation();
    const [modalShow, setModalShow] = useState(true);
    const hadleChange = () => setModalShow(true);
    const handleHide = () => setModalShow(false);
    const state = useSelector((state) => state.widgets.jokes);
    const filters = useSelector((state) => state.widgets.filter);
    const filter = () => state.map((joke) => (!filters ? joke : joke.categories[0] === filters ? joke : null)).filter((i) => i);
    console.log(modalShow);
    return (
        <Container fluid>
            <Row lg='3' xl='4' md='2' xs='1'>
                {filter().length ? (
                    filter().map((item) => {
                        return (
                            <StyledCol key={v4()}>
                                <StyledCard key={v4()}>
                                    <Card.Body key={v4()}>
                                        <StyledNavLink
                                            key={v4()}
                                            to={{ pathname: `/joke/${item.id}`, state: { background: location, state: item.joke } }}
                                            onClick={() => hadleChange}>
                                            {item.joke}
                                            <Item />
                                        </StyledNavLink>
                                    </Card.Body>
                                </StyledCard>
                            </StyledCol>
                        );
                    })
                ) : (
                    <Container>
                        <Row className='justify-content-center'>
                            <EmptyList>There are no jokes here...</EmptyList>
                        </Row>
                    </Container>
                )}
            </Row>
        </Container>
    );
};
