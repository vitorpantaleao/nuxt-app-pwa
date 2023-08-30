<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
        <div v-for="modulo in modulesStore.getModulos" :key="modulo.id">
            <NuxtLink :to="`/modulo/${modulo.id}`">
                <NuxtImg :src="modulo.thumbnail" class="" />
                <h3 class="text-lg py-3 font-sans decoration-slate-500 text-slate-800 font-semibold">{{ modulo.nome }}</h3>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useModulesStore } from '@/stores/ModulesStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const modulesStore = useModulesStore()
</script>

<style lang="scss" scoped>

</style>