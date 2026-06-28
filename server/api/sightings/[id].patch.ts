import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event)
    const user = await serverSupabaseUser(event)
    const body = await readBody(event)

    if (!user)
        throw createError({ statusCode: 401, statusMessage: 'Must be logged in' })

    const idParam = getRouterParam(event, 'id')
    const id = Number(idParam)

    if (!idParam || Number.isNaN(id)) {
        throw createError ({ statusCode: 400, statusMessage: 'Valid sighting id is required' })
    }
    
    if (!body.birdName || !body.date) {
        throw createError({ statusCode: 400, message: 'birdName and date are required' })
    }

    const { data, error } = await supabase
        .from('sightings')
        .update({
            bird_name: body.birdName,
            date: body.date,
            notes: body.notes ?? ''
        })
        .eq('id', id)
        .select()
        .single()

    if (error)
        throw createError({ statusCode: 500, statusMessage: error.message })

    return {
        id: data.id,
        userId: data.user_id,
        birdName: data.bird_name,
        date: data.date,
        notes: data.notes
    }
})