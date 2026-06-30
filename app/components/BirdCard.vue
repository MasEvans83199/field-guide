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
        <div class="card-image">
            <img v-if="bird.imageUrl" :src="bird.imageUrl" :alt="bird.name" />
            <div v-else class="no-image">No image</div>
        </div>
        <h2>{{ bird.name }}</h2>
        <p>{{ bird.family }} - {{ bird.region }}</p>
        <p>{{ bird.description }}</p>
        <NuxtLink :to="`/birds/${bird.slug}`">More...</NuxtLink>
    </div>
</template>

<style scoped>
    .card-image {
        width: 100%;
        height: 180px;
        overflow: hidden;
        margin-bottom: 0.75rem;
    }
    .card-image img {
        width: 10%;
        height: fit-content;
        object-fit: cover;
    }
    .no-image {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #1a1a1a;
        color: #555;
        font-size: 0.85rem;
    }
</style>