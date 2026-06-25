<script setup>
    const form = reactive({
        birdName: '',
        date: '',
        notes: ''
    })

    const emit = defineEmits(['submit'])

    const handleSubmit = () => {
        if (!form.birdName || !form.date)
            return
        emit('submit', {
            birdName: form.birdName,
            date: form.date,
            notes: form.notes
        })

        form.birdName = ''
        form.date = ''
        form.notes = ''
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
        <button @click="handleSubmit">Log sighting</button>
    </div>
</template>