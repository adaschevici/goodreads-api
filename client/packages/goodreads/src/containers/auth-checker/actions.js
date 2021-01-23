export const CHECK_AUTH_REQUEST = 'CHECK_AUTH_REQUEST'
export const CHECK_AUTH_SUCCEEDED = 'CHECK_AUTH_SUCCEEDED'
export const CHECK_AUTH_FAILED = 'CHECK_AUTH_FAILED'
export const CHECK_REAL_API = 'CHECK_REAL_API'

export const checkAuth = () => ({
  type: CHECK_AUTH_REQUEST,
})

export const checkRealApi = () => ({
  type: 'CHECK_REAL_API',
})
