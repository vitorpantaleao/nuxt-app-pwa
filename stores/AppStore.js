import { defineStore } from "pinia"

export const useAppStore = defineStore("AppStore", {
    state: () => {
        return {
            tokenCart: null,
            carrinho: [],
            menuOpen: false,
        }
    },
    actions: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        },
    },
    // getters: {
        // isMenuOpen: (state) => state.menuOpen,
    // },
})