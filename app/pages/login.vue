<script setup>
    definePageMeta({
        middleware: 'guest'
    })
    const supabase = useSupabaseClient()

    const email = ref('')
    const password = ref('')
    const errorMsg = ref('')
    const mode = ref('login')

    const handleSubmit = async () => {
        errorMsg.value = ''

        const action = mode.value === 'login'
            ? supabase.auth.signInWithPassword({ email: email.value, password: password.value })
            : supabase.auth.signUp({ email: email.value, password: password.value })

        const { error } = await action

        if (error) {
            errorMsg.value = error.message
            return
        }

        await navigateTo('/sightings')
    }
</script>

<template>
    <div class="max-w-sm mx-auto mt-16">
        <div class="bg-white border border-gray-200 rounded-lg p-8">
            <h1 class="text-xl font-bold text-gray-900 mb-6 text-center">{{ mode === 'login' ? 'Log in' : 'Sign up' }}</h1>

            <form class="space-y-4" @submit.prevent="handleSubmit">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" v-model="email" type="email" />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" v-model="password" type="password" />
                </div>

                <p class="text-sm text-red-600" v-if="errorMsg">{{ errorMsg }}</p>
                <button class="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors" type="submit" @click="handleSubmit">{{ mode === 'login' ? 'Log in' : 'Sign up' }}</button>

                <button class="w-full mt-4 text-sm text-blue-400 hover:text-blue-800 text-center" @click="mode = mode === 'login' ? 'signup' : 'login'">
                    {{ mode === 'login' ? 'No account? Sign up.' : 'Already have an account? Log in.' }}
                </button>
            </form>
        </div>
    </div>
</template>