<template>
    <div class="w-screen md:w-full mx-auto px-4 md:px-12">
        <h1 class="text-3xl font-semibold">Módulos</h1>
        <ModulesListModules />
    </div>
</template>

<script setup>
useHead({
    title: 'Módulos',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Lista de módulos'
        }
    ]
})
</script>

<style lang="scss" scoped>

</style>