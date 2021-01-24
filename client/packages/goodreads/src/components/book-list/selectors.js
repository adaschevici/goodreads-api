import { createSelector } from 'reselect'

const getMeta = (state) => state.books.meta
const getImages = (state) => state.books.images
const getRatings = (state) => state.books.ratings
const getBooksInProgress = (state) => state.books.booksInProgress

export const getBooks = createSelector(
  [getMeta, getImages, getRatings],
  (meta, images, ratings) => {
    return meta.map((bookMeta, idx) => ({
      ...bookMeta,
      ...images[idx],
      ...ratings[idx],
    }))
  }
)

export const getBooksProgress = createSelector(
  [getBooks, getBooksInProgress],
  (books, booksInProgress) => {
    if (!booksInProgress) return []
    const books_ids = booksInProgress.map((book) => book.book_id)
    return books.filter((book) => books_ids.includes(book.book_id))
  }
)
