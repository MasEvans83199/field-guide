<template>
    <div class="min-h-screen flex flex-col">
        <header class="border-b bg-white sticky top-0 z-10">
            <div class="max-w-2xl mx-auto px-6 py-4">
                <NuxtLink class="text-sm text-gray-600 hover:text-gray-900" to="/birds">←Back</NuxtLink>
            </div>
        </header>
        
        <main class="flex-1 max-w-2xl w-full mx-auto px-6 py-8">
            <slot />
        </main>

        <footer class="border-t">
            <div class="max-w-2xl mx-auto px-6 py-6 text-center text-sm text-gray-500">Bird Field Guide - Created by Mason Evans</div>
        </footer>
    </div>
</template>