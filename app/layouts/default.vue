<script setup>
    const user = useSupabaseUser()
    const supabase = useSupabaseClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        await navigateTo('/login')
    }
</script>

<template>
    <div>
        <header>
            <NuxtLink to="/">Bird Field Guide</NuxtLink>
            <nav>
                <NuxtLink to="/birds">Browse Birds</NuxtLink>
                <NuxtLink to="/sightings">Sightings</NuxtLink>

                <span v-if="user">{{ user.email }}</span>
                <button v-if="user" @click="handleLogout">Log out</button>
                <NuxtLink v-else to="/login">Log in</NuxtLink>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <p>Bird Field Guide  -  Created by Mason Evans</p>
        </footer>
    </div>
</template>