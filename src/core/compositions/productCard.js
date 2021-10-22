import React from 'react'
import styled from  'styled-components'

// Core
import { CardH3, CardP } from '../elements/typography'
import { PrimaryButton } from '../elements/buttons'

// Card Styling
const CardWrapper = styled.div`
  width: 320px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.1);

  .fakeImage {
    width: 100%;
    height: 300px;
    background: gray;
    margin-bottom: 12px;
  }
`

// React composition
const Card = ({ title, description, handleClick }) => {
  return <CardWrapper>
    <div className='fakeImage' />

    <CardH3> {title} </CardH3>
    <CardP> {description} </CardP>

    <PrimaryButton onClick={handleClick}> Buy Me </PrimaryButton>
  </CardWrapper>
}
export default Card