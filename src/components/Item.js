import React, { useState } from 'react';
import { Row, Modal, Button } from 'react-bootstrap';
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';
import { JokePage } from '../styled/Item';

export const Item = (props) => {
    let location = useLocation();
    let history = useHistory();
    let { id } = useParams();
    // console.log('History', history);
    // console.log('Params', id);
    // console.log('Loc', location.state);
    let back = (e) => {
        e.stopPropagation();
        history.goBack();
    };
    return (
        <Modal {...props}>
            <Modal.Body>
                <p>{location.state}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={back}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};
