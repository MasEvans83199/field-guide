<script setup>
    const props = defineProps({
        error: Object
    })

    const handleClick = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="error-page">
        <h1>{{ error.statusCode }}</h1>
        <p v-if="error.statusCode === 404">We couldn't find that page.</p>
        <p v-else>Something went wrong on our end.</p>
        <button @click="handleClick">Back to Home</button>
    </div>
</template>

<style scoped>
    .error-page {
        text-align: center;
        padding: 4rem 1rem;
    }
</style>