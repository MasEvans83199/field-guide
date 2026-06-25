import { sightings } from '../store'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    if (!body.birdName || !body.date) {
        throw createError({ statusCode: 400, message: 'birdName and date are required' })
    }

    const sighting = {
        id: Date.now(),
        birdName: body.birdName,
        date: body.date,
        notes: body.notes ?? ''
    }

    sightings.push(sighting)
    return sighting
})

