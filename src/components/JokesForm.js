import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { loadJokes } from '../redux/ducks/jokes';
import { StyledRow } from '../styled/JokeForm';

export const JokesForm = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.app.loading);
    const [number, setNumber] = useState('');
    const submitHandler = (event) => {
        event.preventDefault();
        if (number) {
            dispatch(loadJokes(number));
        }
        setNumber('');
    };
    return (
        <Form onSubmit={submitHandler}>
            <StyledRow className='justify-content-center'>
                <input type='number' id='title' placeholder='Number of jokes' value={number} onChange={(e) => setNumber(e.target.value)} />
            </StyledRow>
            <StyledRow className='justify-content-center'>
                <Button type='submit' value='submit' disabled={loading}>
                    Load
                </Button>
            </StyledRow>
        </Form>
    );
};
