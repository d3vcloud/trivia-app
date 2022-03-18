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
