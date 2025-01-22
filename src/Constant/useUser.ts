export interface UserType {
    id: string
    name: string,
    email:string,
    contact: string
}

import { useCookies } from 'react-cookie'

/**
 * Custom hook to retrieve user authentication data from cookies.
 *
 * @returns {object} - An object containing the user's information and login status.
 * @returns {object | null} return.user - The user data object retrieved from the cookie, or null if not available or invalid.
 * @returns {boolean} return.isLoggedIn - The login status, true if the user is logged in, otherwise false.
 */
export const useUser = () => {
  const [cookies] = useCookies(['user', 'access_token'])

  let user: UserType | null = null


  // Get the user data from the cookie and handle any potential JSON parsing errors
  try {
    user = cookies?.user ? cookies?.user : null

  } catch (error) {
    console.error('Failed to parse user cookie:', error)
  }

  // Get the access_token from the cookie
  const access_token = cookies.access_token 

  return { user, access_token }
}