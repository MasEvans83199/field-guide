import { createClient } from '@supabase/supabase-js'

export const getSupabaseClient = (event) => {
    const config = useRuntimeConfig(event)

    return createClient(
        config.public.supabaseUrl,
        config.public.supabaseAnonKey
    )
}