import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const JokeText = styled.p`
    text-align: center;
    font-size: 1.75rem;
    font-weight: bold;
    color: #404040;
`;

export const StyledNavLink = styled(Link)`
    font-size: 1.2rem;
    &:hover {
        text-decoration: none;
    }
`;
