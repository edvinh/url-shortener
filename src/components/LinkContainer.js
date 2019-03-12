import React from 'react'
import styled from 'styled-components'
import { Typography, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

const StyledCard = styled(Paper)`
  padding: 16px;
  margin: 24px 0;
`

const LinkContainer = ({ original, shortened, ...rest }) => (
  <StyledCard elevation={4} {...rest}>
    <Typography color="primary" variant="h5">
      {shortened}
    </Typography>
    <br />
    <Typography color="textSecondary" variant="subheading">
      Original Link
    </Typography>
    <Typography variant="subtitle1">{original}</Typography>
  </StyledCard>
)

LinkContainer.propTypes = {
  original: PropTypes.string.isRequired,
  shortened: PropTypes.string.isRequired,
}

export default LinkContainer
