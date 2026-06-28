import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const supabase = await serverSupabaseClient(event)
    const user = await serverSupabaseUser(event)
    const body = await readBody(event)

    if (!user)
        throw createError({ statusCode: 401, statusMessage: 'Must be logged in to log sightings' })
    
    if (!body.birdName || !body.date) {
        throw createError({ statusCode: 400, message: 'birdName and date are required' })
    }

    const { data, error } = await supabase
        .from('sightings')
        .insert({
            user_id: user.sub,
            bird_name: body.birdName,
            date: body.date,
            notes: body.notes ?? ''
        })
        .select()
        .single()

    if (error)
        throw createError({ statusCode: 500, statusMessage: error.message })

    return {
        id: data.id,
        birdName: data.bird_name,
        date: data.date,
        notes: data.notes
    }
})