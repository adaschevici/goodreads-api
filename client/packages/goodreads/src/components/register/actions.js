export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED'
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED'

export const doRegister = (fullName, username, password, rePassword) => ({
  type: REGISTRATION_REQUEST,
  payload: {
    fullName,
    email: username,
    password,
    rePassword,
  },
})
