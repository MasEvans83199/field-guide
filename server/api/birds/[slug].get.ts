import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)

  const slugParam = getRouterParam(event, 'slug')
  const slug = String(slugParam)

  if (!slugParam)
    throw createError ({ statusCode: 400, statusMessage: 'Invalid slug'})

  const { data: bird, error } = await supabase
    .from('birds')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !bird) {
    throw createError({ statusCode: 404, statusMessage: 'Bird not found' })
  }

  const { data: images } = await supabase
    .from('bird_images')
    .select('storage_path')
    .eq('bird_id', bird.id)
    .order('position', { ascending: true })

    const imageUrl = (images ?? []).map(img => 
      supabase.storage.from('bird-images').getPublicUrl(img.storage_path).data.publicUrl
    )

  return {
    ...bird,
    images: imageUrl
  }
})