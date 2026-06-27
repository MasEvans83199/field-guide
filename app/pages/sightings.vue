<script setup>
    const { sightings, addSighting } = useSightings()

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
        <h2>Log a sighting</h2>
        <SightingForm @submit="addSighting" />
    </div>

    <div>
        <h2>Previous sightings</h2>
        <p v-if="!sightings?.length">No sightings.</p>
        <div v-for="sighting in sightings" :key="sighting.id">
            <strong>{{ sighting.birdName }}</strong>
            <span>{{ sighting.date }}</span>
            <p v-if="sighting.notes">{{ sighting.notes }}</p>
        </div>
    </div>
</template>