<script setup>
    const user = useSupabaseUser()
    const supabase = useSupabaseClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        await navigateTo('/login')
    }
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <header class="border-b bg-white sticky top-0 z-10">
            <div class="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
                 <NuxtLink class="text-lg font-semibold text-gray-900" to="/">Bird Field Guide</NuxtLink>
                <nav class="flex items-center gap-6 text-sm text-gray-600">
                    <NuxtLink class="hover:text-gray-900" to="/birds">Browse Birds</NuxtLink>
                    <NuxtLink class="hover:text-gray-900" to="/sightings">Sightings</NuxtLink>
                    <template v-if="user">
                        <span  class="text-gray-400">{{ user.email }}</span>
                        <button class="hover:text-gray-900" @click="handleLogout">Log out</button>
                    </template>
                    
                    <NuxtLink class="hover:text-gray-900" v-else to="/login">Log in</NuxtLink>
                </nav>
            </div>
        </header>
        <main class="flex-1 max-w-5xl w-full mx-auto px-6 py-8">
            <slot />
        </main>
        <footer class="border-t">
            <div class="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-gray-500">Bird Field Guide  -  Created by Mason Evans</div>
        </footer>
    </div>
</template>