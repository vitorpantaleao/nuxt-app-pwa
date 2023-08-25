<template>
    <div>
        <NavigationMenuBar />
        <div class="grid grid-cols-[max-content,1fr]">
            <NavigationSideMenu :toggleMenu="isMenuOpen" @closeMenu="closeMenu" />
            <div>
                <slot />
            </div>
            <DownloadApp />
        </div>
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