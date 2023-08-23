<template>
    <div>
        <h1>About</h1>
        <p>Rota atual: {{ route.path }}</p>

        <NuxtLink to="/">Home</NuxtLink>
    </div>
</template>

<script setup>
const route = useRoute()
</script>