<template>
    <div class="grid grid-cols-[max-content,1fr]">
        <NavigationSideMenu />
        <div class="max-w-full">
            <NavigationMenuBar />
            <DownloadApp />
            <div class="min-h-screen">
                <slot />
            </div>
            <NavigationFooter />
        </div>
    </div>
</template>

<script setup>
// verify if route changed and close menu
import { useAppStore } from "@/stores/AppStore"

const AppStore = useAppStore()
const route = useRoute()

watch(
    () => route.path,
    () => {
        if (AppStore.menuOpen) {
            AppStore.toggleMenu()
        }
    }
)
</script>