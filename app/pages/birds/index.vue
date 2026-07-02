<script setup>
const {  pending, error, families, search, filter, selectedFamily } = useBirds()

useSeoMeta({
    title: "Birds - Bird Field Guide",
    description: "Reference Guide to various bird species."
})
</script>

<template>
    <div>
        <h1 class="text-2xl font-bold text-gray-900 mb-6">Browse Birds</h1>
        <div v-if="pending">Loading...</div>
        <div v-else-if="error">Error</div>
        <div v-else>
            <div class="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                    class="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus-border-blue-500" 
                    v-model="search" 
                    type="text" 
                    placeholder="Search" 
                />
                <select 
                    class="rounded-md border border-gray-300 px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    v-model="selectedFamily"
                >
                    <option value="">All</option>
                    <option v-for="family in families" :key="family" :value="family">{{ family }}</option>
                </select>
            </div>
            <p class="text-sm text-gray-500 mb-6">{{ filter.length }} result{{ filter.length === 1 ? '' : 's' }}</p>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <BirdCard v-for="bird in filter" :key="bird.slug" :bird="bird" />
            </div>
            <p class="text-gray-500" v-if="filter.length === 0">No birds in filter.</p>
        </div>
    </div>
</template>