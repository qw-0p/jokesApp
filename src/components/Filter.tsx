import React from 'react';
import { DropdownButton, Dropdown, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterList } from '../redux/ducks/jokes';
import { RootState } from '../redux/store';


export const Filter: React.FC = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState): string[] => state.jokes.categories);
    const loading = useSelector((state: RootState): boolean => state.app.loading);
    const submitHandler = (event: any): void => {
        dispatch(filterList(event));
    };
    
    return (
        <Col>
            <DropdownButton id='dropdown-item-button' title='Filter' disabled={loading}>
                <Dropdown.Item as='button' onClick={(): void => submitHandler(null)}>
                    all
                </Dropdown.Item>
                {state.map(
                    (item: any): JSX.Element =>
                        item && (
                            <Dropdown.Item as='button' key={item} onClick={(): void => submitHandler(item)}>
                                {item}
                            </Dropdown.Item>
                        )
                )}
            </DropdownButton>
        </Col>
    );
};
