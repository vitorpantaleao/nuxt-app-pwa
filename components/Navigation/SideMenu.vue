<template>
    <aside :class="['top-0 z-[999999] max-h-screen h-screen fixed md:sticky px-3 py-4 bg-gray-50 dark:bg-slate-800 transition-all duration-300 ease-out', {'w-64': menuOpen, '-translate-x-full sm:translate-x-0 md:w-fit': !menuOpen}]">
        <button @click="toggleMenu" class="absolute left-[104%] top-2 z-10" v-show="menuOpen">
            <Icon icon="ic:sharp-close" width="35" class="text-black dark:text-white" />
        </button>
        <ul class="space-y-2 font-medium">
            <li v-for="item, i in itemsMenu" :key="i">
                <template v-if="!item.subMenu">
                    <NuxtLink :to="item.route" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Icon :icon="item.icon" width="25" />
                        <span :class="['ml-3', {'md:hidden': !menuOpen, 'block': menuOpen}]">{{ item.name }}</span>
                        <Icon icon="ic:outline-keyboard-arrow-down" width="25" v-if="item.subMenu && menuOpen" />
                    </NuxtLink>
                </template>
                <template v-else>
                    <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" :aria-controls="`'dropdown-'${i}`" :data-collapse-toggle="`'dropdown-'${i}`" @click="openSubMenu(`'dropdown-'${i}`)">
                        <Icon :icon="item.icon" width="25" />
                        <span :class="['flex-1 ml-3 text-left whitespace-nowrap', {'md:hidden': !menuOpen, 'block': menuOpen}]">{{ item.name }}</span>
                        <Icon icon="ic:outline-keyboard-arrow-down" width="25" v-if="menuOpen" />
                    </button>
                    <ul :id="`'dropdown-'${i}`" class="hidden py-2 space-y-2">
                        <li v-for="subItem in item.subMenu" :key="subItem">
                            <NuxtLink :to="subItem.route" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{{ subItem.name }}</NuxtLink>
                        </li>
                    </ul>
                </template>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useAppStore } from "@/stores/AppStore"

const AppStore = useAppStore()
const menuOpen = computed(() => AppStore.menuOpen)

const itemsMenu = [
    {
        name: 'Dashboard',
        icon: 'ic:round-space-dashboard',
        route: '/',
        subMenu: null
    },
    {
        name: 'Módulos',
        icon: 'ic:sharp-school',
        route: '/modulos',
        subMenu: null
    },
    {
        name: 'Loja',
        icon: 'ic:round-shopping-cart',
        route: '/loja',
        subMenu: null
    },
    {
        name: 'Minha Conta',
        icon: 'ic:round-account-circle',
        route: '/minha-conta',
        subMenu: [
            {
                name: 'Perfil',
                route: '/perfil'
            },
            {
                name: 'Endereço',
                route: '/endereco'
            },
        ]
    },
    {
        name: 'Avisos',
        icon: 'ic:round-notifications',
        route: '/avisos',
        subMenu: null
    }
]

function toggleMenu() {
    AppStore.toggleMenu()
}

function openSubMenu(dataset) {
    document.getElementById(dataset).classList.toggle('hidden')
}
</script>

<style scoped>
    .router-link-active {
        @apply bg-gray-700 font-bold;
    }
    .router-link-active:hover {
        @apply bg-gray-700 font-bold;
    }
</style>