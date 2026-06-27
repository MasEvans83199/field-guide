import { getSupabaseClient } from "../utils/supabase"

export default defineEventHandler(async (event) => {
  const supabase = getSupabaseClient(event)
  
  const { data, error } = await supabase.from('birds').select('*')

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return data
})