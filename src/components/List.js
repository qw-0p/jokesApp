import React from 'react';
import { Container, Card, Row} from 'react-bootstrap';
import {v4} from 'uuid';
import { useSelector } from 'react-redux';
import {StyledCol, StyledCard, StyledNavLink, EmptyList} from '../styled/List';



export const List = () => {
  const state = useSelector(state => state.widgets.jokes);
  const filters = useSelector(state => state.widgets.filter);

  const filter = () => {
    const jokes = state.map(joke => !filters ? joke : (joke.categories[0] === filters) ? joke : null).filter(i => i);
    if(jokes.length) {
      return jokes.map((item) => {
        return (
          <StyledCol key={v4()}>
            <StyledCard key={v4()}>
              <StyledNavLink to={{pathname: `/joke/${item.id}`, state: {item}}} key={v4()}>
                <Card.Body key={v4()}>
                  {item.joke.length > 99 ? item.joke.slice(0, 99) + '...' : item.joke}
                </Card.Body>
              </StyledNavLink>
          </StyledCard>
          </StyledCol>
        )
      })
    } return (<Container>
                <Row className="justify-content-center">
                  <EmptyList>There are no jokes here...</EmptyList>
                </Row>
              </Container>)
  };
  const jokes = filter();
  
	return (
		<Container fluid>
       <Row lg='3' xl='4' md='2' xs='1' >
        {jokes}
      </Row>
		</Container>
	);
}