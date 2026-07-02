<script setup>
    defineProps({
        bird: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <NuxtLink class="group block rounded-lg border border-gray-200 overflow-hidden bg-white hover:shadow-md transition-shadow" :to="`/birds/${bird.slug}`">
        <div class="w-full h-[180px] overflow-hidden bg-gray-100">
            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform" v-if="bird.imageUrl" :src="bird.imageUrl" :alt="bird.name" />
            <div v-else class="size-full flex items-center justify-center text-gray-400 text-sm">No image</div>
        </div>
        <div class="p-4">
            <h2 class="font-semibold text-gray-900">{{ bird.name }}</h2>
            <p class="text-sm text-gray-500 mb-2">{{ bird.family }} - {{ bird.region }}</p>
            <p class="text-sm text-gray-600 line-clamp-2">{{ bird.description }}</p> 
        </div>
    </NuxtLink>
</template>