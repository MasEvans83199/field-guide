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
    <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" v-model="form.birdName" type="text" required/>
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" v-model="form.date" type="date" required/>
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <input class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" v-model="form.notes" type="text" />
        </div>
        <button class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors" @click="handleSubmit">{{ isEditing ? 'Save' : 'Log sighting' }}</button>
    </form>
</template>