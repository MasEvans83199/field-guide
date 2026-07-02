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
    <div class="max-w-2xl mx-auto">
        <BirdCarousel class="rounded-lg overflow-hidden mb-6" :images="bird.images" :alt="bird.name" />
        <h1 class="text-3xl font-bold text-gray-900">{{ bird.name }}</h1>
        <p class="text-sm text-gray-500 mb-4">{{ bird.family }} - {{ bird.region }}</p>
        <p class="text-gray-700 leading-relaxed">{{ bird.description }}</p>
    </div>
</template>