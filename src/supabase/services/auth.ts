import { supabase } from 'supabase/client'

/**
 *
 * @param {String} email - The user's email address
 */
export const signInWithMagicLink = async (email: string) => {
  const result = await supabase.auth.signIn({
    email
  })
  return result
}

/**
 * Authentication with google provider
 */
export const signInWithGoogle = async () => {
  try {
    const { user, error } = await supabase.auth.signIn({
      provider: 'google'
    })
    if (error) throw new Error('An error ocurred during authentication')
    return user
  } catch (error) {
    console.error(error)
  }
}

/**
 * Authentication with facebook
 */
export const signInWithFacebook = async () => {
  try {
    const { user, error } = await supabase.auth.signIn({
      provider: 'facebook'
    })
    if (error) throw new Error('An error ocurred during authentication')
    return user
  } catch (error) {
    console.error(error)
  }
}
