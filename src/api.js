import { generateString } from './utils'

const ROOT_SHORT_URL = 'https://x.com/'

/* Generates the shortened URL. */
const shortenUrl = url => `${ROOT_SHORT_URL}${generateString()}`

/**
 * Mocks an API call.
 * Returns a promise that resolves to a shortened URL after 1200 ms.
 * @param {string} url
 */
export function postUrl (url) {
  // Mock network call
  const shortUrl = shortenUrl(url)
  return new Promise(resolve => setTimeout(() => resolve(shortUrl), 1200))
}
