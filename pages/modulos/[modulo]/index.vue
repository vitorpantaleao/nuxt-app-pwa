<template>
    <div class="w-screen md:w-full mx-auto px-4 md:px-12">
        <h1 class="text-3xl font-semibold">{{ modulo.nome }}</h1>
        <p class="text-lg font-normal">{{ modulo.descricao }}</p>

        <div class="mt-5">
            <h2 class="text-xl font-semibold">Esse módulo possui: {{ modulo.aulas.length }} {{ modulo.aulas.length <= 1 ? 'Aula' : 'Aulas' }}</h2>
            <ul class="mt-2 grid grid-cols-2 md:grid-cols-4 gap-6">
                <li v-for="aula in modulo.aulas" :key="aula.id">
                    <NuxtLink :to="`/modulos/${modulo.id}/aula/${aula.id}`">
                        <NuxtImg :src="aula.thumbnail" loading="lazy" class="" />
                        <p>{{ aula.nome }}</p>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useModulesStore } from '@/stores/ModulesStore'

const route = useRoute()
const modulesStore = useModulesStore()
const modulo = modulesStore.getModulo(route.params.modulo)

useHead({
    title: modulo.nome,
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: modulo.descricao
        }
    ]
})
</script>