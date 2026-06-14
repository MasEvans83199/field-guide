<template>
    <div>
        <header>
            <NuxtLink to="/">Bird Field Guide</NuxtLink>
            <nav>
                <NuxtLink to="/birds">Browse Birds</NuxtLink>
                <NuxtLink to="/sightings">Sightings</NuxtLink>
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