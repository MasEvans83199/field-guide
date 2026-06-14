export const useBirds = () => {
    const { data: birds, pending, error } = useFetch('/api/birds')

    const search = ref('')
    const selectedFamily = ref('')

    const families = computed(() => 
        [...new Set(birds.value?.map(b => b.family) ?? [])]
    )

    const filter = computed(() => {
        return (birds.value ?? []).filter(bird => {
            const matchSearch = bird.name.toLowerCase().includes(search.value.toLowerCase())
            const matchFamily = selectedFamily.value === '' || bird.family === selectedFamily.value
            return matchSearch && matchFamily
        })
    })
    return { birds, pending, error, families, filter, search, selectedFamily }
}