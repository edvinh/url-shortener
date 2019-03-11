const URLS_KEY = 'urls'

/**
 * Generates an alphanumerical string with a length of 6.
 * This this is used for mocking the backend.
 * Additionally, some sort of hashing algo should be used to avoid collisions
 * @returns {string} The generated string
 */
export function generateString () {
  const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let text = ''

  for (let i = 0; i < 6; i++) {
    text += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
  }

  return text
}

/**
 * Returns an array of URL objects from localStorage.
 * Returns an empty array if no URLs are set.
 * @returns {Array} The array of URL objects
 */
export function getURLs () {
  return JSON.parse(localStorage.getItem(URLS_KEY)) || []
}

/**
 * Adds an URL object to the localStorage.
 * If the list is larger than 10, the elements with an index of 10 or more are removed.
 * @param {Object} url the URL Object
 */
export function addURL (url) {
  const urls = getURLs()
  const updatedURLs = [url, ...urls]

  if (updatedURLs.length > 10) {
    updatedURLs.splice(10)
  }

  localStorage.setItem(URLS_KEY, JSON.stringify(updatedURLs))
}
