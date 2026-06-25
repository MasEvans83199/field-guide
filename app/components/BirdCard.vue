<script setup>
    defineProps({
        bird: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="bird-card">
        <h2>{{ bird.name }}</h2>
        <p>{{ bird.family }} - {{ bird.region }}</p>
        <p>{{ bird.description }}</p>
        <NuxtLink :to="`/birds/${bird.slug}`">More...</NuxtLink>
    </div>
</template>