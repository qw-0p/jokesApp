import { Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledCol = styled(Col)`
    margin: 10px 0;
    display: flex;
    align-items: center;
`;

export const StyledCard = styled(Card)`
    width: 100%;
    height: 100%;
    text-align: center;
    font-weight: bold;
    padding: 2px 5px;
    text-decoration: none;
`;

export const EmptyList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    text-align: center;
    font-size: 2rem;
    color: #969696;
`;
