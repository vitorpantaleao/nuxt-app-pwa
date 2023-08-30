import { defineStore } from "pinia"

export const useModulesStore = defineStore("ModulesStore", {
    state: () => {
        return {
            modulos: [
                {
                    id: 1,
                    nome: "Módulo 1",
                    descricao: "Descrição do módulo 1",
                    thumbnail: "https://i.ytimg.com/vi/MYe3dKfQiRQ/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            nome: "Aula 1",
                            descricao: "Descrição da aula 1",
                            thumbnail: "https://i.ytimg.com/vi/MYe3dKfQiRQ/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/MYe3dKfQiRQ",
                            duracao: "00:05:00",
                            concluida: false,
                        },
                    ],
                },
                {
                    id: 2,
                    nome: "Módulo 2",
                    descricao: "Descrição do módulo 2",
                    thumbnail: "https://i.ytimg.com/vi/leVycPfVEgQ/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            nome: "Aula 1",
                            descricao: "Descrição da aula 1",
                            thumbnail: "https://i.ytimg.com/vi/leVycPfVEgQ/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/leVycPfVEgQ",
                            duracao: "00:05:00",
                            concluida: false,
                        },
                    ],
                },
                {
                    id: 3,
                    nome: "Módulo 3",
                    descricao: "Descrição do módulo 3",
                    thumbnail: "https://i.ytimg.com/vi/WdXQabecaEs/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            nome: "Aula 1",
                            descricao: "Descrição da aula 1",
                            thumbnail: "https://i.ytimg.com/vi/WdXQabecaEs/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/WdXQabecaEs",
                            duracao: "00:05:00",
                            concluida: false,
                        },
                    ],
                },
                {
                    id: 4,
                    nome: "Módulo 4",
                    descricao: "Descrição do módulo 4",
                    thumbnail: "https://i.ytimg.com/vi/YxiHmTkg8oc/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            nome: "Aula 1",
                            descricao: "Descrição da aula 1",
                            thumbnail: "https://i.ytimg.com/vi/YxiHmTkg8oc/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/YxiHmTkg8oc",
                            duracao: "00:05:00",
                            concluida: false,
                        },
                    ],
                },
            ],
        }
    },
    actions: {
        setConcluida(aula) {
            aula.concluida = true
        }
    },
    getters: {
        getModulos() {
            return this.modulos
        },
    },
})