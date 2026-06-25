<template>
    <div>
        <header>
            <NuxtLink to="/birds">Back</NuxtLink>
        </header>
        
        <main class="detail-main">
            <slot />
        </main>

        <footer>
            <p>Bird Field Guide - Created by Mason Evans</p>
        </footer>
    </div>
</template>

<style scoped>
    .detail-main {
        max-width: 700px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }
</style>