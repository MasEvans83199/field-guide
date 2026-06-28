<script setup>
    const user = useSupabaseUser()
    const { sightings, addSighting, updateSighting, deleteSighting, error: sightingsError } = useSightings()

    const editingSighting = ref(null)

    const handleSubmit = (payload) => {
        if (payload.id) {
            updateSighting(payload)
            editingSighting.value = null
        }
        else {
            addSighting(payload)
        }
    }

    useSeoMeta({
        title: "Sightings - Bird Field Guide",
        description: "Log/View your bird sightings."
    })
</script>

<template>
    <div>
        <h1>My Sightings</h1>
    </div>
    <div>
        <h2>{{ editingSighting ? 'Edit sighting' : 'Log a sighting' }}</h2>
        <SightingForm :sighting="editingSighting" @submit="handleSubmit" />
        <button v-if="editingSighting" @click="editingSighting = null">Cancel</button>
    </div>

    <div>
        <h2>Previous sightings</h2>
        <p v-if="sightingsError">Couldn't load sightings. Refresh the page.</p>
        <p v-else-if="!sightings?.length">No sightings.</p>
        <div v-for="sighting in sightings" :key="sighting.id">
            <strong>{{ sighting.birdName }}</strong>
            <span>{{ sighting.date }}</span>
            <p v-if="sighting.notes">{{ sighting.notes }}</p>
            <template v-if="sighting.userId === user?.sub">
                <button @click="editingSighting = sighting">Edit</button>
                <button v-if="sighting.userId === user?.sub" @click="deleteSighting(sighting.id)">Delete</button>
            </template>
        </div>
    </div>
</template>