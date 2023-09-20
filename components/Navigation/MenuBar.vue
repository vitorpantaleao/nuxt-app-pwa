<template>
    <header class="w-full bg-gray-100 dark:bg-slate-900 sticky top-0 z-[99999]">
        <div class="flex items-center justify-center relative">
            <template v-if="!AppStore.menuOpen">
                <PhList :size="32" class="absolute left-4 cursor-pointer dark:text-white text-slate-900" @click="toggleMenu" />
            </template>
            <NuxtLink to="/">
                <NuxtImg src="img/logo.png" class="h-12 filter dark:invert grayscale-[1] contrast-[2.5] brightness-[1.5]" />
            </NuxtLink>
        </div>
    </header>
</template>

<script setup>
import { PhList } from "@phosphor-icons/vue"
import { useAppStore } from "@/stores/AppStore"

const AppStore = useAppStore()

function toggleMenu() {
    AppStore.toggleMenu()
}
</script>