import { getSupabaseClient } from "../../utils/supabase"

export default defineEventHandler(async (event) => {
    const supabase = getSupabaseClient(event)

    const { data, error } = await supabase
        .from('sightings')
        .select('*')
        .order('created_at', { ascending: false })

    if (error)
        throw createError({ statusCode: 500, statusMessage: error.message })

    return data.map(s => ({
        id: s.id,
        userId: s.user_id,
        birdName: s.bird_name,
        date: s.date,
        notes: s.notes,
        createdAt: s.created_at
    }))
})