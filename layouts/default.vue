<template>
    <div>
        <NavigationMenuBar />
        <div class="grid grid-cols-[max-content,1fr]">
            <NavigationSideMenu />
            <DownloadApp />
            <div class="max-w-full">
                <slot />
                <NavigationFooter />
            </div>
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