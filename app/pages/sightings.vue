<script setup>
    const user = useSupabaseUser()
    const { sightings, addSighting, updateSighting, deleteSighting, error: sightingsError } = useSightings()

    const editingSighting = ref(null)

    const handleSubmit = (payload) => {
        if (payload.id) {
            updateSighting(payload)
            editingSighting.value = null
        }
        else {
            addSighting(payload)
        }
    }

    useSeoMeta({
        title: "Sightings - Bird Field Guide",
        description: "Log/View your bird sightings."
    })
</script>

<template>
    <div class="max-w-2xl mx-auto space-y-10">
        <h1 class="text-2xl font-bold text-gray-900">My Sightings</h1>
    </div>
    <section class="bg-white border border-gray-200 rounded-lg p-6">
        <h2 class="font-semibold text-gray-900 mb-4">{{ editingSighting ? 'Edit sighting' : 'Log a sighting' }}</h2>
        <SightingForm :sighting="editingSighting" @submit="handleSubmit" />
        <button class="mt-3 text-sm text-gray-500 hover:text-gray-700" v-if="editingSighting" @click="editingSighting = null">Cancel</button>
    </section>

    <section>
        <h2 class="font-semibold text-gray-900 mb-4">Previous sightings</h2>
        <p class="text-sm text-red-600" v-if="sightingsError">Couldn't load sightings. Refresh the page.</p>
        <p class="text-sm text-gray-500" v-else-if="!sightings?.length">No sightings.</p>
        <div class="divide-y divide-gray-200 border-t border-b border-gray-200" v-else>
           <div class="py-4 flex items-center justify-between gap-4" v-for="sighting in sightings" :key="sighting.id">
                <div>
                    <div class="flex items-baseline gap-2">
                        <strong class="text-gray-900">{{ sighting.birdName }}</strong>
                        <span class="text-sm text-gray-500">{{ sighting.date }}</span>
                    </div>
                    <p class="text-sm text-gray-600 mt-1" v-if="sighting.notes">{{ sighting.notes }}</p>
                </div>    
                
                
                <template class="flex gap-3 shrink-0 text-sm" v-if="sighting.userId === user?.sub">
                    <button class="text-blue-600 hover:text-blue-800" @click="editingSighting = sighting">Edit</button>
                    <button class="text-red-600 hover:text-red-800" v-if="sighting.userId === user?.sub" @click="deleteSighting(sighting.id)">Delete</button>
                </template>
            </div> 
        </div>
        
    </section>
</template>