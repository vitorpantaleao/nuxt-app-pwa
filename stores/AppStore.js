import { defineStore } from "pinia"

export const useAppStore = defineStore("AppStore", {
    state: () => {
        return {
            tokenCart: null,
            carrinho: [],
        }
    },
    getters: {
        //
    },
    actions: {
        //
    },
})