import { call, put, all } from 'redux-saga/effects'
import * as api from '../api'
import {
  FETCH_META_SUCCEEDED,
  FETCH_META_FAILED,
  FETCH_IMAGES_SUCCEEDED,
  FETCH_IMAGES_FAILED,
  FETCH_RATINGS_SUCCEEDED,
  FETCH_RATINGS_FAILED,
  FETCH_BOOKS_IN_PROGRESS_SUCCEEDED,
  FETCH_BOOKS_IN_PROGRESS_FAILED,
  UPDATE_BOOKS_IN_PROGRESS_SUCCEEDED,
  UPDATE_BOOKS_IN_PROGRESS_FAILED,
} from '../../components/book-list/actions'

export const watchBookMeta = function* watchFetchMeta() {
  try {
    const { data } = yield call(api.fetchMeta)
    yield put({
      type: FETCH_META_SUCCEEDED,
      payload: { meta: data },
    })
  } catch (e) {
    yield put({
      type: FETCH_META_FAILED,
      payload: { error: e.message },
    })
  }
}

export const watchBookImages = function* watchFetchImages() {
  try {
    const { data } = yield call(api.fetchImages)
    yield put({
      type: FETCH_IMAGES_SUCCEEDED,
      payload: { images: data },
    })
  } catch (e) {
    yield put({
      type: FETCH_IMAGES_FAILED,
      payload: { error: e.message },
    })
  }
}

export const watchBookRatings = function* watchFetchRatings() {
  try {
    const { data } = yield call(api.fetchRating)
    yield put({
      type: FETCH_RATINGS_SUCCEEDED,
      payload: { ratings: data },
    })
  } catch (e) {
    yield put({
      type: FETCH_RATINGS_FAILED,
      payload: { error: e.message },
    })
  }
}

export const watchBooksProgress = function* watchFetchBookProgress({
  payload,
}) {
  try {
    const { data } = yield call(api.fetchBooksInProgress, payload)
    yield put({
      type: FETCH_BOOKS_IN_PROGRESS_SUCCEEDED,
      payload: { booksInProgress: data },
    })
  } catch (e) {
    yield put({
      type: FETCH_BOOKS_IN_PROGRESS_FAILED,
      payload: { error: e.message },
    })
  }
}

export const watchBooksProgressUpdate = function* watchFetchBookProgressUpdate({
  payload,
}) {
  try {
    const { data } = yield call(api.updateBooksInProgress, payload)
    yield put({
      type: UPDATE_BOOKS_IN_PROGRESS_SUCCEEDED,
      payload: { booksInProgress: data },
    })
  } catch (e) {
    yield put({
      type: UPDATE_BOOKS_IN_PROGRESS_FAILED,
      payload: { error: e.message },
    })
  }
}

export const watchBooks = function* watchBookRequest() {
  const orchestrated = [watchBookImages, watchBookRatings, watchBookMeta]
  yield all(orchestrated.map((fn) => call(fn)))
}
