<script setup>
definePageMeta({
    layout: 'detail'
})
const route=useRoute()
const {data: bird, error}= await useFetch(`/api/birds/${route.params.slug}`)
</script>

<template>
    <div>
        <div v-if="error">Bird not found</div>
        <div v-else-if="bird">
            <h1>{{ bird.name }}</h1>
            <p>{{ bird.family }}  -  {{ bird.region }}</p>
            <p>{{ bird.description }}</p>
        </div>
    </div>
</template>