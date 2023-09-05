<template>
    <div class="p-5">
        <h1 class="text-3xl font-semibold">{{ modulo.nome }}</h1>
        <p class="text-lg font-normal">{{ modulo.descricao }}</p>

        <div class="mt-5">
            <h2 class="text-2xl font-semibold"> {{ modulo.aulas.length }} {{ modulo.aulas.length <= 1 ? 'Aula' : 'Aulas' }}</h2>
            <ul class="mt-2 grid grid-cols-4 gap-6">
                <li v-for="aula in modulo.aulas" :key="aula.id">
                    <NuxtLink :to="`/modulos/${modulo.id}/aula/${aula.id}`">
                        <NuxtImg :src="aula.thumbnail" loading="lazy" class="" />
                        <p>{{ aula.nome }}</p>
                    </NuxtLink>
                </li>
            </ul>

            <h2 class="text-2xl font-semibold">Materiais</h2>
            <!-- <ul class="mt-2">
                <li v-for="material in modulo.materiais" :key="material.id">
                    <a :href="material.link" target="_blank">{{ material.nome }}</a>
                </li>
            </ul> -->
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