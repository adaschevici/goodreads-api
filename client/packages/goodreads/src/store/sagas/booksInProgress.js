import { call, put } from 'redux-saga/effects'
import * as api from '../api'
import {
  FETCH_BOOKS_IN_PROGRESS_SUCCEEDED,
  FETCH_BOOKS_IN_PROGRESS_FAILED,
  UPDATE_BOOKS_IN_PROGRESS_SUCCEEDED,
  UPDATE_BOOKS_IN_PROGRESS_FAILED,
} from '../../components/book-list/actions'

export const watchBooksProgress = function* watchFetchBookProgress({
  payload,
}) {
  try {
    const {
      data: { books },
    } = yield call(api.fetchBooksInProgress, payload)
    yield put({
      type: FETCH_BOOKS_IN_PROGRESS_SUCCEEDED,
      payload: { booksInProgress: books },
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
    const {
      data: { books },
    } = yield call(api.updateBooksInProgress, payload)
    yield put({
      type: UPDATE_BOOKS_IN_PROGRESS_SUCCEEDED,
      payload: { booksInProgress: books },
    })
  } catch (e) {
    yield put({
      type: UPDATE_BOOKS_IN_PROGRESS_FAILED,
      payload: { error: e.message },
    })
  }
}
