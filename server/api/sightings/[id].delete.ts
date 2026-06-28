import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event)
    const user = await serverSupabaseUser(event)

    if (!user) {
        throw createError({ statusCode: 401, statusMessage: 'Must be logged in' })
    }

    const idParam = getRouterParam(event, 'id')
    const id = Number(idParam)

    if (!idParam || Number.isNaN(id)) {
        throw createError ({ statusCode: 400, statusMessage: 'Valid sighting id is required' })
    }

    const { error } = await supabase
        .from('sightings')
        .delete()
        .eq('id', id)

    if (error) {
        throw createError({ statusCode: 500, statusMessage: error.message })
    }

    return { success: true }
})