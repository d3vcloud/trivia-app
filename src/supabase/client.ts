import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL: string = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY: string = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
