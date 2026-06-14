<script setup>
const site = 'Bird Field Guide'
const tag = 'Log and review birds in the field.'
</script>

<template>
    <div>
        <h1>{{ site }}</h1>
        <p>{{ tag }}</p>
        <NuxtLink to="/birds">Browse species</NuxtLink>
    </div>
</template>