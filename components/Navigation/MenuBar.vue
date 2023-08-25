<template>
    <header class="w-full bg-slate-900">
        <div class="flex items-center justify-center relative">
            <PhList :size="32" class="absolute left-4 cursor-pointer text-white" @click="toggleMenu" />
            <NuxtLink to="/">
                <NuxtImg src="/logo.png" class="h-12 filter invert grayscale-[1] contrast-[2.5] brightness-[1.5]" />
            </NuxtLink>
        </div>
    </header>
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