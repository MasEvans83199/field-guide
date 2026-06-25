export const useSightings = () => {
    const { data: sightings, refresh } = useFetch('/api/sightings')

    const addSighting = async (payload) => {
        await $fetch('/api/sightings', {
            method: 'POST',
            body: payload
        })
        await refresh()
    }

    return { sightings, addSighting }
}