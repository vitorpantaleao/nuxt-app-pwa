<template>
    <div class="w-screen h-10 bg-slate-300">
        <div class="flex items-center justify-center relative">
            <PhList :size="32" class="absolute left-2 cursor-pointer" @click="toggleMenu" />
            <!-- <NuxtImg src="/logo.png" class="h-10" /> -->
        </div>
        <NavigationSideMenu :toggleMenu="isMenuOpen" @closeMenu="closeMenu" />
    </div>
</template>

<script setup>
import { PhList } from "@phosphor-icons/vue"

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}
</script>