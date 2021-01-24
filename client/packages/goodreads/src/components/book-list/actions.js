export const FETCH_META_REQUEST = 'FETCH_META_REQUEST'
export const FETCH_META_SUCCEEDED = 'FETCH_META_SUCCEEDED'
export const FETCH_META_FAILED = 'FETCH_META_FAILED'

export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST'
export const FETCH_IMAGES_SUCCEEDED = 'FETCH_IMAGES_SUCCEEDED'
export const FETCH_IMAGES_FAILED = 'FETCH_IMAGES_FAILED'

export const FETCH_RATINGS_REQUEST = 'FETCH_RATINGS_REQUEST'
export const FETCH_RATINGS_SUCCEEDED = 'FETCH_RATINGS_SUCCEEDED'
export const FETCH_RATINGS_FAILED = 'FETCH_RATINGS_FAILED'

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST'
export const FETCH_BOOKS_SUCCEEDED = 'FETCH_BOOKS_SUCCEEDED'
export const FETCH_BOOKS_FAILED = 'FETCH_BOOKS_FAILED'

export const FETCH_BOOKS_IN_PROGRESS_REQUEST = 'FETCH_BOOKS_IN_PROGRESS_REQUEST'
export const FETCH_BOOKS_IN_PROGRESS_SUCCEEDED =
  'FETCH_BOOKS_IN_PROGRESS_SUCCEEDED'
export const FETCH_BOOKS_IN_PROGRESS_FAILED = 'FETCH_BOOKS_IN_PROGRESS_FAILED'

export const UPDATE_BOOKS_IN_PROGRESS_REQUEST =
  'UPDATE_BOOKS_IN_PROGRESS_REQUEST'
export const UPDATE_BOOKS_IN_PROGRESS_SUCCEEDED =
  'UPDATE_BOOKS_IN_PROGRESS_SUCCEEDED'
export const UPDATE_BOOKS_IN_PROGRESS_FAILED = 'UPDATE_BOOKS_IN_PROGRESS_FAILED'

export const FETCH_REAL_API_REQUEST = 'FETCH_REAL_API_REQUEST'
export const fetchMeta = () => ({
  type: FETCH_META_REQUEST,
})

export const fetchImages = () => ({
  type: FETCH_IMAGES_REQUEST,
})

export const fetchRatings = () => ({
  type: FETCH_RATINGS_REQUEST,
})

export const fetchBooksInProgress = (username) => ({
  type: FETCH_BOOKS_IN_PROGRESS_REQUEST,
  payload: {
    username,
  },
})

export const updateBooksInProgress = (username, id, progress) => ({
  type: UPDATE_BOOKS_IN_PROGRESS_REQUEST,
  payload: {
    username,
    id,
    progress,
  },
})

export const fetchBooks = () => ({
  type: FETCH_BOOKS_REQUEST,
})

export const fetchRealApi = () => ({
  type: FETCH_REAL_API_REQUEST,
})
