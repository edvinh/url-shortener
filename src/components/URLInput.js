import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'

const StyledInput = styled.input`
  transition: all 250ms ease-out;
  width: 75%;
  height: 100%;
  padding: 18px;
  font-size: 1.3rem;
  color: #222;
  border: 1px solid transparent;
  border-radius: 5px 0 0 5px;
  outline: none;
  margin: 0;
  &:focus {
    border: 1px solid #0284a8;
  }
`

const Wrapper = styled.div`
  padding: 0;
  background-color: #a9e8dc;
  width: 100%;
  height: 72px;
  transition: all 250ms ease-out;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
`

const StyledButton = styled(Button)`
  position: relative;
  top: -4px;
  width: 25%;
  height: 72px;
  margin: 0;
  border-radius: 0 5px 5px 0;
`

const URLInput = ({ loading, onClick, ...rest }) => (
  <Wrapper>
    <StyledInput {...rest} placeholder="Paste a link..." />
    <StyledButton onClick={onClick} color="primary" disabled={loading}>
      {loading ? <CircularProgress /> : 'Shorten'}
    </StyledButton>
  </Wrapper>
)

URLInput.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

URLInput.defaultProps = {
  loading: false,
}

export default URLInput
