<script setup>
const props = defineProps ({
    sighting: {
        type: Object,
        default: null
    }
})
    const form = reactive({
        birdName: '',
        date: '',
        notes: ''
    })

    watch(() => props.sighting, (newSighting) => {
        form.birdName = newSighting?.birdName ?? '',
        form.date = newSighting?.date ?? '',
        form.notes = newSighting?.notes ?? ''
    }, { immediate: true })

    const isEditing = computed(() => !!props.sighting)

    const emit = defineEmits(['submit'])

    const handleSubmit = () => {
        if (!form.birdName || !form.date)
            return
        emit('submit', {
            id: props.sighting?.id,
            birdName: form.birdName,
            date: form.date,
            notes: form.notes
        })

        if (!isEditing.value) {
            form.birdName = ''
            form.date = ''
            form.notes = ''
        }
    }
</script>

<template>
    <div>
        <div>
            <label>Name</label>
            <input v-model="form.birdName" type="text" required/>
        </div>
        <div>
            <label>Date</label>
            <input v-model="form.date" type="date" required/>
        </div>
        <div>
            <label>Notes</label>
            <input v-model="form.notes" type="text" />
        </div>
        <button @click="handleSubmit">{{ isEditing ? 'Save' : 'Log sighting' }}</button>
    </div>
</template>