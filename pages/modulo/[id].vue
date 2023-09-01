<template>
    <div class="w-screen md:w-auto md:flex overflow-hidden">
        <div class="main flex-1">
            <div class="sticky sm:static z-10 top-0">
                <iframe class="w-full h-[300px] md:h-[700px]" :src="`${modulo.aulas[0].video}?si=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="p-5">
                <h1 class="text-2xl font-semibold">{{ modulo.nome }}</h1>
                <p class="text-lg font-normal">{{ modulo.descricao }}</p>
            </div>
        </div>
        <ModulesAsideModules />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useModulesStore } from '@/stores/ModulesStore'

const route = useRoute()
const modulesStore = useModulesStore()
const modulo = modulesStore.getModulo(route.params.id)
</script>