<script setup>
const tagline = 'Log and review birds in the field.'
const config = useRuntimeConfig()

useSeoMeta({
    title: config.public.siteTitle,
    description: tagline
})
</script>

<template>
    <div class="py-20 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ config.public.siteTitle }}</h1>
        <p class="text-lg text-gray-600 mb-8">{{ tagline }}</p>
        <NuxtLink class="inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors" to="/birds">Browse species</NuxtLink>
    </div>
</template>