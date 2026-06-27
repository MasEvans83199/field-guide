<script setup>
definePageMeta({
    layout: 'detail'
})
const route=useRoute()

const { data: bird } = await useFetch(`/api/birds/${route.params.slug}`)

if (!bird.value)
    throw createError({ statusCode: 404, statusMessage: 'Bird not found' })

useSeoMeta({
    title: `${bird.value.name} - Bird Field Guide`,
    description: `Information about the ${bird.value.name} - ${bird.value.family}, found in ${bird.value.region}.`
})
</script>

<template>
    <div>
        <h1>{{ bird.name }}</h1>
        <p>{{ bird.family }} - {{ bird.region }}</p>
        <p>{{ bird.description }}</p>
    </div>
</template>