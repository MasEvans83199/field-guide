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
    <div class="w-full" v-if="images.length">
        <div class="w-full h-[350px] overflow-hidden rounded-lg">
            <img class="size-full object-cover":src="images[currentIndex]" :alt="`${alt} photo ${currentIndex + 1}`" loading="lazy" />
        </div>

        <div class="flex items-center justify-center mt-2 gap-4" v-if="images.length > 1">
            <button class="bg-hidden b-0 pb-2 pt-1 text-2xl cursor-pointer opacity-60 hover:opacity-100 disabled:opacity-20 disabled:cursor-default" @click="prev" :disabled="currentIndex === 0">‹</button>
            <span class="text-sm opacity-60">{{ currentIndex + 1 }} / {{ images.length }}</span>
            <button class="bg-hidden b-0 pb-2 pt-1 text-2xl cursor-pointer opacity-60 hover:opacity-100 disabled:opacity-20 disabled:cursor-default" @click="next(images)" :disabled="currentIndex === images.length - 1">›</button>
        </div>
        <div v-else-if="images.length < 1">
            <p>No images available.</p>
        </div>
    </div>
</template>