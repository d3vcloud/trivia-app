import { User } from '@supabase/supabase-js'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { supabase } from 'supabase/client'

type AuthState = {
  user: User | undefined
  // setUser: React.Dispatch<React.SetStateAction<User>>
}

export const AuthContext = createContext<AuthState>({
  user: undefined
  // setUser: () => undefined
})

type Props = {
  children: JSX.Element
}
export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>(undefined)
  const navigate = useNavigate()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () =>
      checkUser()
    )

    const checkUser = async () => {
      const user = supabase.auth.user()
      if (user) {
        setUser(user)
        navigate('/', { replace: true })
      } else {
        navigate('/auth/login', { replace: true })
      }
    }
    checkUser()
    return () => {
      authListener?.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
