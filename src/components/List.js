import React, { useState, useEffect } from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import { v4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { StyledCol, StyledCard, EmptyList } from '../styled/List';
import { Item, ModalPage } from '.';

export const List = () => {
    const history = useHistory();
    const stateHistory = history.location.state;
    const [modalState, setModalState] = useState(null);
    const handleHide = () => {
        setModalState((modalState.modal = false));
        history.goBack();
    };
    const state = useSelector((state) => state.jokes.jokes);
    const filters = useSelector((state) => state.jokes.filter);
    const filterList = () => state.map((joke) => (!filters ? joke : joke.categories[0] === filters && joke)).filter((element) => element);

    useEffect(() => {
        if (!!stateHistory) {
            setModalState(stateHistory);
        }
    }, [stateHistory]);

    return (
        <Container fluid>
            <Row lg='3' xl='4' md='2' xs='1'>
                {filterList().length ? (
                    filterList().map((item) => {
                        return (
                            <StyledCol key={v4()}>
                                <StyledCard key={v4()}>
                                    <Card.Body key={v4()}>
                                        <Item joke={item.joke} id={item.id} />
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
                {!!modalState && <ModalPage show={modalState.modal} joke={modalState.joke} onHide={handleHide} />}
            </Row>
        </Container>
    );
};
