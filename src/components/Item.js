import React from 'react'
import {Container} from 'react-bootstrap'
import styled from 'styled-components'

export default function Item(props) {
  return (
    <Container fluid='md'>
      <p>{props.joke}</p>
    </Container>
  )
}
