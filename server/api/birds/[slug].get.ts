import { getSupabaseClient } from "~~/server/utils/supabase"

export default defineEventHandler(async (event) => {
  const supabase = getSupabaseClient(event)
  const slug = getRouterParam(event, 'slug')

  const { data, error } = await supabase
    .from('birds')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) {
    throw createError({ statusCode: 404, message: 'Bird not found' })
  }

  return data
})