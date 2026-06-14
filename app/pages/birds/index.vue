<script setup>
const { birds, pending, error, families, search, filter, selectedFamily } = useBirds()
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
            <P>{{ filter.length }} result{{ filter.length === 1 ? '' : 's' }}</P>
            <div v-for="bird in filter" :key="bird.slug">
                <h3>{{ bird.name }}</h3>
                <p>{{ bird.family }}  -  {{ bird.region }}</p>
                <p>{{ bird.description }}</p>
                <NuxtLink :to="`/birds/${bird.slug}`">Details</NuxtLink>
            </div>
            <p v-if="filter.length === 0">No birds in filter.</p>
        </div>
    </div>
</template>