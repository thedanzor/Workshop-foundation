import styled from 'styled-components'

const defaultStyling = `
  outline: 0;
  padding: 12px 22px;
  border: 0;
  border-radius: 6px;
`

const defaultDisabledStyling = `
  &:disabled {
    opacity: 0.6;
  }
`

export const PrimaryButton = styled.button`
  ${defaultStyling}

  background: blue;
  color: #fff;

  ${defaultDisabledStyling}
`

export const SecondaryButton = styled.button`
  ${defaultStyling}

  background: #fff;
  color: #000;

  ${defaultDisabledStyling}
`