import React from 'react';
import { DropdownButton, Dropdown, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { filterList } from '../ducks/widgets';

export const Filter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.widgets.categories);
    const loading = useSelector((state) => state.widgets.loading);
    const submitHandler = (category) => {
        dispatch(filterList(category));
    };

    return (
        <Col>
            <DropdownButton id='dropdown-item-button' title='Filter' disabled={loading}>
                <Dropdown.Item as='button' onClick={() => submitHandler(null)}>
                    all
                </Dropdown.Item>
                {state.map((item) =>
                    item ? (
                        <Dropdown.Item as='button' key={item} onClick={() => submitHandler(item)}>
                            {item}
                        </Dropdown.Item>
                    ) : null
                )}
            </DropdownButton>
        </Col>
    );
};
