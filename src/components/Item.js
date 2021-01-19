import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

import { JokeText, StyledNavLink } from '../styled/Item';

export const Item = ({ id, joke = '', onChange, show = false, onHide }) => {
    let location = useLocation();

    return (
        <>
            <StyledNavLink to={{ pathname: `/joke/${id}`, state: { background: location, joke: joke, id: id } }} onClick={() => onChange(id)}>
                {joke.length > 99 ? joke.slice(0, 100) + '...' : joke}
            </StyledNavLink>
            <Modal show={show} centered size='lg'>
                <Modal.Body>
                    <JokeText>{joke}</JokeText>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onHide()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
