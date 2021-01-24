import axios from 'axios'

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

export function fetchMeta() {
  return client.get('/api/books')
}

export function fetchRating() {
  return client.get('/api/ratings')
}

export function fetchImages() {
  return client.get('/api/images')
}

export function createUser({ fullName, email, password, rePassword }) {
  return client.post('/auth/register', {
    fullName,
    email,
    password,
    rePassword,
  })
}

export function authenticateUser({ email, password }) {
  return client.post('/auth/login', { email, password })
}

export function checkToken() {
  return client.post('/auth/check-token')
}

export function fetchBooksInProgress({ username }) {
  return client.get(`/api/book-progress/${username}`)
}
