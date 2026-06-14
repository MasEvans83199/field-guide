<script setup>
const { birds, pending, error, families } = useBirds()
</script>

<template>
    <div>
        <h1>Browse Birds</h1>
        <div v-if="pending">Loading...</div>
        <div v-else-if="error">Error</div>
        <div v-else>
            <p>Families: {{ families.join(', ') }}</p>
            <div v-for="bird in birds" :key="bird.slug">
                <h3>{{ bird.name }}</h3>
                <p>{{ bird.family }}  -  {{ bird.region }}</p>
                <p>{{ bird.description }}</p>
                <NuxtLink :to="`/birds/${bird.slug}`">Details</NuxtLink>
            </div>
        </div>
    </div>
</template>