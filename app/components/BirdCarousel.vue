<script setup>
    defineProps({
        images: {
            type: Array,
            required: true
        },
        alt: {
            type: String,
            default: 'Bird photo'
        }
    })

    const currentIndex = ref(0)
    const prev = () => {
        if (currentIndex.value > 0)
            currentIndex.value--
    }
    const next = (images) => {
        if (currentIndex.value < images.length - 1)
            currentIndex.value++
    }
</script>

<template>
    <div class="carousel" v-if="images.length">
        <div class="carousel-wrap">
            <img :src="images[currentIndex]" :alt="`${alt} photo ${currentIndex + 1}`" loading="lazy" />
        </div>

        <div class="carousel-controls" v-if="images.length > 1">
            <button @click="prev" :disabled="currentIndex === 0">‹</button>
            <span>{{ currentIndex + 1 }} / {{ images.length }}</span>
            <button @click="next(images)" :disabled="currentIndex === images.length - 1">›</button>
        </div>
        <div v-else-if="images.length < 1">
            <p>No images available.</p>
        </div>
    </div>
</template>

<style scoped>
    .carousel {
        width: 100%;
    }
    .carousel-wrap {
        width: 100%;
        height: 350px;
        overflow: hidden;
        border-radius: 8px;
    }
    .carousel-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .carousel-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 0.75rem;
    }
    .carousel-controls button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 0.5rem;
        opacity: 0.6;
    }
    .carousel-controls button:hover:not(:disabled) {
        opacity: 1;
    }
    .carousel-controls button:disabled {
        opacity: 0.2;
        cursor: default;
    }
    .carousel-controls span {
        font-size: 0.85rem;
        opacity: 0.5;
    }
</style>