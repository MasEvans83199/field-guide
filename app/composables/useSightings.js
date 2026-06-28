export const useSightings = () => {
    const { data: sightings, error, refresh } = useFetch('/api/sightings/sightings')

    const addSighting = async (payload) => {
        await $fetch('/api/sightings/sightings', {
            method: 'POST',
            body: payload
        })
        await refresh()
    }

    const updateSighting = async (payload) => {
        await $fetch(`/api/sightings/${payload.id}`, {
            method: 'PATCH',
            body: payload
        })
        await refresh()
    }

    const deleteSighting = async (id) => {
        await $fetch(`/api/sightings/${id}`, {
            method: 'DELETE'
        })
        await refresh()
    }

    return { sightings, error, addSighting, updateSighting, deleteSighting }
}