<template>
    <div class="w-screen md:w-auto md:flex">
        <div class="main flex-1">
            <div class="sticky sm:static z-10 top-12">
                <iframe class="w-full h-[300px] md:h-[700px]" :src="`${aula.video}?si=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="p-5">
                <p>Você está na aula {{ route.params.id }} do módulo {{ route.params.modulo }}</p>
                <h1 class="text-2xl font-semibold">{{ modulo.nome }}</h1>
                <p class="text-lg font-normal">{{ modulo.descricao }}</p>

                <h2 class="text-2xl font-semibold pt-12">Materiais</h2>
                <ul class="mt-2">
                    <li v-for="material, i in aula.materiais" :key="i">
                        {{ material.nome }}
                        <VuePdfApp style="height: 100vh;" :pdf="`/${material.file}`">PDF</VuePdfApp>
                    </li>
                </ul>
            </div>
        </div>
        <ModulesAsideModules />
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useModulesStore } from '@/stores/ModulesStore'
import VuePdfApp from "vue3-pdf-app";
// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";

const route = useRoute()
const modulesStore = useModulesStore()
const modulo = modulesStore.getModulo(route.params.modulo)
const aula = modulo.aulas.find(aula => aula.id == route.params.id)

useHead({
    title: aula.nome + ' | ' + modulo.nome,
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: aula.descricao
        }
    ]
})
</script>