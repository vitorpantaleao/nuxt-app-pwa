<template>
    <div class="w-screen md:w-auto md:flex">
        <div class="main flex-1 relative">
            <div class="sticky sm:static z-10 top-12">
                <iframe class="w-full h-[300px] md:h-[700px]" :src="`${aula.video}?si=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="bg-gray-100 h-7 flex items-center">
                    <p class="text-gray-900 text-sm font-semibold text-right px-5">Você está assistindo a aula {{ route.params.id }} do módulo {{ route.params.modulo }}</p>
                </div>
            </div>
            <div class="p-5">
                <h1 class="text-2xl font-semibold">{{ modulo.nome }}</h1>
                <p class="text-lg font-normal text-gray-600">{{ modulo.descricao }}</p>
                <div class="border border-b-1 my-8"></div>
                <h2 class="text-2xl font-semibold">Materiais</h2>
                <p class="text-gray-600" v-if="aula.materiais == ''">Não há material para essa aula</p>
                <ul class="mt-2 flex space-x-2" v-else>
                    <li v-for="material, i in aula.materiais" :key="i">
                        <button class="text-center text-orange-600 font-bold p-2 rounded hover:bg-orange-100" @click="showFile = true">
                            <Icon icon="ic:round-picture-as-pdf" width="50" class="mx-auto" />
                            <h3>{{ material.nome }}</h3>
                        </button>
                        <div class="h-full bg-black absolute top-0 left-0 right-0 text-white z-10 p-5" v-if="showFile">
                            <button class="text-white flex items-center font-bold mx-auto pb-3" @click="showFile = false">
                                <Icon icon="ic:round-close" width="25" /> FECHAR
                            </button>
                            <!-- <VuePdfApp style="" :pdf="`/${material.file}`"></VuePdfApp> -->
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <ModulesAsideModules />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useModulesStore } from '@/stores/ModulesStore'
// import VuePdfApp from "vue3-pdf-app"
import "vue3-pdf-app/dist/icons/main.css"
import { Icon } from "@iconify/vue"

const route = useRoute()
const modulesStore = useModulesStore()
const modulo = modulesStore.getModulo(route.params.modulo)
const aula = modulo.aulas.find(aula => aula.id == route.params.id)

const showFile = ref(false)

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