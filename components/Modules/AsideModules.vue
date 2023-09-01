<template>
    <div :class="['aside_modules dark:bg-slate-800 dark:text-white md:h-screen md:sticky top-0', {'w-full md:w-1/4': showLessons, '-translate-x-full sm:translate-x-full w-[0]': !showLessons}]">
        <div class="show-lessons absolute w-[100px] right-[100%] top-3 hidden md:flex items-center justify-center bg-slate-900 p-1 cursor-pointer" v-show="!showLessons" @click="showLessons = true">
            <Icon icon="material-symbols:menu" class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 mr-1" aria-hidden />
            Ver aulas
        </div>
        <div class="flex items-center justify-between bg-slate-700 p-3 font-semibold text-2xl">
            <h3>Módulos</h3>
            <Icon icon="material-symbols:close" class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 mr-1 cursor-pointer hidden md:block" aria-hidden @click="showLessons = false" />
        </div>
        <AccordionRoot class="rounded-md" :default-value="[]" type="multiple" :collapsible="true" >
            <template v-for="modulo in modulos" :key="modulo.id">
                <AccordionItem class="accordion-item border-b-[1px] border-slate-600" :value="modulo.id">
                    <AccordionHeader class="flex p-3">
                        <AccordionTrigger class="accordion-trigger group flex items-center justify-between w-full">
                            <span>{{ modulo.nome }}</span>
                            <Icon icon="radix-icons:chevron-down" class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" aria-hidden />
                        </AccordionTrigger>
                    </AccordionHeader>
                    <template v-for="aula in modulo.aulas" :key="aula.id">
                        <AccordionContent class="accordion-content bg-slate-700 border-b-[0.5px] border-slate-400">
                            <div class="px-5 py-2 hover:bg-slate-900 cursor-pointer">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <AvatarRoot class="bg-blackA3 inline-flex h-[45px] w-[65px] select-none items-center justify-center overflow-hidden align-middle">
                                            <AvatarImage class="h-full w-full object-cover" :src="aula.thumbnail" :alt="aula.nome" />
                                            <AvatarFallback class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium" :delay-ms="600"> {{ aula.nome }} </AvatarFallback>
                                        </AvatarRoot>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-sm font-medium text-white">
                                            {{ aula.nome }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </template>
                </AccordionItem>
            </template>
        </AccordionRoot>
    </div>
</template>

<script setup>
import { useModulesStore } from '@/stores/ModulesStore'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger, AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'

const modulesStore = useModulesStore()
const modulos = modulesStore.getModulos
const showLessons = ref(true)
</script>