import React from 'react';
import { useLocation } from 'react-router-dom';

import { StyledNavLink } from '../styled/Item';

type ItemProps = {id: string, joke: string}

export const Item: React.FC<ItemProps> = ({ id = '', joke = '' }) => {
    let location = useLocation();
    return (
        <>
            <StyledNavLink
                to={{ pathname: `/joke/${id}`, state: { background: location, id: id, joke: joke, modal: true } }}
                dangerouslySetInnerHTML={{
                    __html: joke.length > 99 ? joke.slice(0, 100) + '...' : joke
                }} />
        </>
    );
};
