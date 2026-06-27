<script setup>

definePageMeta({
    layout: 'detail'
})
const route=useRoute()

const { data: bird } = await useAsyncData(`bird-${route.params.slug}`, () =>
    queryCollection('birds').path(`/birds/${route.params.slug}`).first()
)

if (!bird.value)
    throw createError({ statusCode: 404, statusMessage: 'Bird not found' })

useSeoMeta({
    title: `${bird.value.title} - Bird Field Guide`,
    description: `Information about the ${bird.value.title} - ${bird.value.family}, found in ${bird.value.region}.`
})
</script>

<template>
    <div>
        <h1>{{ bird.title }}</h1>
        <p>{{ bird.family }} - {{ bird.region }}</p>
        <ContentRenderer :value="bird" />
    </div>
</template>