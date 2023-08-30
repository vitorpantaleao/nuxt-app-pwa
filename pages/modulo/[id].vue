<template>
    <div class="md:p-5 w-screen md:w-auto">
        <iframe class="w-full h-[300px] md:h-[600px]" :src="`${modulo.aulas[0].video}?si=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h1 class="text-2xl font-semibold">{{ modulo.nome }}</h1>
        <p class="text-lg font-semibold">{{ modulo.descricao }}</p>
        <!-- <pre>
            {{ modulo }}
        </pre> -->
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useModulesStore } from '@/stores/ModulesStore'

const route = useRoute()
const modulesStore = useModulesStore()
const modulo = modulesStore.getModulo(route.params.id)

</script>