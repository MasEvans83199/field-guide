<script setup>
const siteName = 'Bird Field Guide'
const tagline = 'Log and review birds in the field.'

useSeoMeta({
    title: siteName,
    description: tagline
})
</script>

<template>
    <div>
        <h1>{{ siteName }}</h1>
        <p>{{ tagline }}</p>
        <NuxtLink to="/birds">Browse species</NuxtLink>
    </div>
</template>