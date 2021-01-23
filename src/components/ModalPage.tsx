import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { JokeText } from '../styled/ModalPage';

type ModalProps = {show: boolean, joke: string, onHide: () => void}

export const ModalPage: React.FC<ModalProps> = ({ show = false, joke = '', onHide }) => (
    <Modal show={show} centered size='lg'>
        <Modal.Body>
            <JokeText dangerouslySetInnerHTML={{ __html: joke }} />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => onHide()}>Close</Button>
        </Modal.Footer>
    </Modal>
);
