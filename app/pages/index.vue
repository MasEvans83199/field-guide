<script setup>
const siteName = 'Bird Field Guide'
const tagline = 'Log and review birds in the field.'
const config = useRuntimeConfig()

useSeoMeta({
    title: config.public.siteTitle,
    description: tagline
})
</script>

<template>
    <div>
        <h1>{{ config.public.siteTitle }}</h1>
        <p>{{ tagline }}</p>
        <NuxtLink to="/birds">Browse species</NuxtLink>
    </div>
</template>