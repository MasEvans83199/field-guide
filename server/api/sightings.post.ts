import { getSupabaseClient } from "../utils/supabase"

export default defineEventHandler(async (event) => {
    const supabase = getSupabaseClient(event)
    const body = await readBody(event)
    
    if (!body.birdName || !body.date) {
        throw createError({ statusCode: 400, message: 'birdName and date are required' })
    }

    const { data, error } = await supabase
        .from('sightings')
        .insert({
            bird_name: body.birdName,
            date: body.date,
            notes: body.notes ?? ''
        })
        .select()
        .single()

    if (error)
        throw createError({ statusCode: 500, statusMessage: error.message })

    return data
})

