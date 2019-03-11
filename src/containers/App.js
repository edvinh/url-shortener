import React, { Component } from 'react'

import styled from 'styled-components'
import { Typography, Snackbar } from '@material-ui/core'

import URLInput from '../components/URLInput'
import LinkContainer from '../components/LinkContainer'

import * as API from '../api'
import { getURLs, addURL } from '../utils'

// App Wrapper
const Wrapper = styled.div`
  width: 50vw;
  padding: 64px 12px;
  margin: 0 auto;
  max-width: 960px;
  @media (max-width: 768px) {
    width: 97.5vw;
  }
`

const Header = styled.h1`
  font-family: monospace;
  font-size: 4rem;
  margin-bottom: 3rem;
  color: #444;
`

// Wraps our previous link components
const LinkContainerWrapper = styled.div`
  padding-top: 64px;
`

class App extends Component {
  constructor () {
    super()

    // Get previous URLs from localStorage
    const urls = getURLs()

    this.state = {
      // Loading state when generating a URL
      loading: false,

      // URL Input state
      input: '',

      // Holds the current & previous URLs
      urls: urls || [],

      // State for checking if a url has been generated
      urlCreated: false,
    }
  }

  _handleClick = async () => {
    // If the input field is empty, do nothing
    if (!this.state.input) {
      return
    }
    const { input } = this.state

    // Update loading state & fetch the shortened URL
    this.setState({ loading: true })
    const shortened = await API.postUrl(input)

    // The new URL
    const url = { original: input, shortened }

    // Update URLS state
    const urls = [url, ...this.state.urls].slice(0, 10)

    this.setState({
      urls,
      loading: false,
      urlCreated: true,
      input: '',
    })

    // Add the generated URL to localStorage
    addURL(url)
  }

  _handleInput = e => this.setState({ input: e.target.value })

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this._handleClick()
    }
  }

  render () {
    const {
      urls, loading, input, urlCreated,
    } = this.state

    // Get the current URL, if any
    const currentUrl = urls[0] || {}
    const { shortened, original } = currentUrl

    // Remove the first URL in the list if it's the current URL
    const slicedUrls = urlCreated ? urls.slice(1) : urls

    return (
      <Wrapper>
        <Header>url-shortener</Header>
        <URLInput
          onClick={this._handleClick}
          onChange={this._handleInput}
          onKeyDown={this._handleKeyDown}
          value={input}
          loading={loading}
        />

        {urlCreated && <LinkContainer original={original} shortened={shortened} />}

        {/* Previous URLs */}
        {slicedUrls && slicedUrls.length > 0 && (
          <LinkContainerWrapper>
            <Typography variant="display1">Older links</Typography>
            {slicedUrls.map((url, i) => (
              <LinkContainer key={`lc-${i}`} original={url.original} shortened={url.shortened} />
            ))}
          </LinkContainerWrapper>
        )}
      </Wrapper>
    )
  }
}

export default App
