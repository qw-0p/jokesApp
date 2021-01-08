import {useState, useEffect} from 'react'
import {Container, Row, Col, Button, Form, ListGroup} from 'react-bootstrap'
import styled from 'styled-components'
import './App.css'
import Item from './components/Item'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch('http://api.icndb.com/jokes/random/3')
      .then((res) => res.json())
      .then(
        (result) => {
          setJokes(result.value)
        },
        (error) => {
          throw new Error(error)
        }
      )
  }, [])

  console.log('Jokes', jokes)

  const StyledRow = styled(Row)`
    margin: 20px 0;
  `
  const StyledButton = styled(Button)`
    width: 200px;
    mmargin: 0 auto;
  `
  const StyleForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  return (
    <Container fluid='md'>
      <StyledRow>
        <ListGroup>
          {jokes.map((item) => (
            <ListGroup.Item key={item.id} className='mb-2'>
              <Item joke={item.joke} key={item.id} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </StyledRow>

      <StyledRow>
        <Col>
          <StyleForm>
            <Form.Control type='number' placeholder='Количество шуток' className='mb-2' />
            <StyledButton variant='outline-primary' type='submit' onClick={(event) => event.preventDefault()}>
              Загрузить
            </StyledButton>
          </StyleForm>
        </Col>
      </StyledRow>
    </Container>
  )
}

export default App
