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
    <div>
        <h1>{{ mode === 'login' ? 'Log in' : 'Sign up' }}</h1>

        <div>
            <label>Email</label>
            <input v-model="email" type="email" />
        </div>
        <div>
            <label>Password</label>
            <input v-model="password" type="password" />
        </div>

        <p v-if="errorMsg">{{ errorMsg }}</p>
        <button @click="handleSubmit">{{ mode === 'login' ? 'Log in' : 'Sign up' }}</button>

        <button @click="mode = mode === 'login' ? 'signup' : 'login'">
            {{ mode === 'login' ? 'No account? Sign up.' : 'Already have an account? Log in.' }}
        </button>
    </div>
</template>