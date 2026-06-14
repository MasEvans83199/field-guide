export const useBirds = () => {
    const { data: birds, pending, error } = useFetch('/api/birds')

    const families = computed(() => 
        [...new Set(birds.value?.map(b => b.family) ?? [])]
    )
    return { birds, pending, error, families }
}