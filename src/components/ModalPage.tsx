import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { JokeText } from '../styled/ModalPage';

export const ModalPage = ({ show, joke, onHide } : {show: boolean, joke: string, onHide: () => void}) => (
    <Modal show={show} centered size='lg'>
        <Modal.Body>
            <JokeText dangerouslySetInnerHTML={{ __html: joke }} />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => onHide()}>Close</Button>
        </Modal.Footer>
    </Modal>
);
