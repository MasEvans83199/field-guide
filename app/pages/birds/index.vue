<script setup>
const {  pending, error, families, search, filter, selectedFamily } = useBirds()
</script>

<template>
    <div>
        <h1>Browse Birds</h1>
        <div v-if="pending">Loading...</div>
        <div v-else-if="error">Error</div>
        <div v-else>
            <input v-model="search" type="text" placeholder="Search" />
            <select v-model="selectedFamily">
                <option value="">All</option>
                <option v-for="family in families" :key="family" :value="family">{{ family }}</option>
            </select>
            <p>{{ filter.length }} result{{ filter.length === 1 ? '' : 's' }}</p>
            <BirdCard v-for="bird in filter" :key="bird.slug" :bird="bird" />
            <p v-if="filter.length === 0">No birds in filter.</p>
        </div>
    </div>
</template>