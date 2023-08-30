<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
        <!-- {{ route.params.id }} -->
        <!-- <pre>{{ modulesStore.getModulos[0].thumbnail }}</pre> -->
        <div v-for="modulo in modulesStore.getModulos" :key="modulo.id">
            <NuxtLink :to="`/modulo/${modulo.id}`">
                <NuxtImg :src="modulo.thumbnail" class="" />
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