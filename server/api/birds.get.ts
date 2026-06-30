import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)
  
  const { data, error } = await supabase
    .from('birds')
    .select('*')

  if (error)
    throw createError({ statusCode: 500, statusMessage: error.message })

  return Promise.all(data.map(async (bird) => {
    const { data: first } = await supabase
      .from('bird_images')
      .select('storage_path')
      .eq('bird_id', bird.id)
      .order('position', { ascending: true })
      .limit(1)
      .maybeSingle()

    const imageUrl = first
      ? supabase.storage.from('bird-images').getPublicUrl(first.storage_path).data.publicUrl : null
    return { ...bird, imageUrl }
  }))
})