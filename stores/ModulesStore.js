import { defineStore } from "pinia"

export const useModulesStore = defineStore("ModulesStore", {
    state: () => {
        return {
            modulos: [
                {
                    id: 1,
                    nome: "Módulo 1",
                    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                    thumbnail: "https://i.ytimg.com/vi/MYe3dKfQiRQ/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            type: "video",
                            nome: "Aula 1",
                            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                            thumbnail: "https://i.ytimg.com/vi/MYe3dKfQiRQ/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/MYe3dKfQiRQ",
                            duracao: "00:05:00",
                            concluida: false,
                            materiais: [
                                {
                                    id: 1,
                                    nome: "PDF Aula",
                                    file: "files/02-conceitos-de-programacao.pdf",
                                    concluido: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    nome: "Módulo 2",
                    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                    thumbnail: "https://i.ytimg.com/vi/leVycPfVEgQ/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            type: "video",
                            nome: "Aula 1",
                            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                            thumbnail: "https://i.ytimg.com/vi/leVycPfVEgQ/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/leVycPfVEgQ",
                            duracao: "00:05:00",
                            concluida: false,
                            materiais: [
                                {
                                    id: 1,
                                    nome: "PDF Aula",
                                    file: "files/04-estrutura-sequencial.pdf",
                                    concluido: false,
                                },
                            ],
                        },
                        {
                            id: 2,
                            type: "video",
                            nome: "Aula 2",
                            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                            thumbnail: "https://i.ytimg.com/vi/fpXlGqhO2Fk/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/fpXlGqhO2Fk",
                            duracao: "00:05:00",
                            concluida: false,
                            materiais: [],
                        },
                    ],
                },
                {
                    id: 3,
                    nome: "Módulo 3",
                    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                    thumbnail: "https://i.ytimg.com/vi/WdXQabecaEs/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            type: "video",
                            nome: "Aula 1",
                            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                            thumbnail: "https://i.ytimg.com/vi/WdXQabecaEs/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/WdXQabecaEs",
                            duracao: "00:05:00",
                            concluida: false,
                            materiais: [
                                {
                                    id: 1,
                                    nome: "PDF Aula",
                                    file: "files/Curso-Java-COMPLETO.pdf",
                                    concluido: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 4,
                    nome: "Módulo 4",
                    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                    thumbnail: "https://i.ytimg.com/vi/YxiHmTkg8oc/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            type: "video",
                            nome: "Aula 1",
                            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                            thumbnail: "https://i.ytimg.com/vi/YxiHmTkg8oc/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/YxiHmTkg8oc",
                            duracao: "00:05:00",
                            concluida: false,
                            materiais: [],
                        },
                    ],
                },
                {
                    id: 5,
                    nome: "Módulo 5",
                    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                    thumbnail: "https://i.ytimg.com/vi/2G_mWfG0DZE/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            type: "video",
                            nome: "Aula 1",
                            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                            thumbnail: "https://i.ytimg.com/vi/2G_mWfG0DZE/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/2G_mWfG0DZE",
                            duracao: "00:05:00",
                            concluida: false,
                            materiais: [],
                        },
                    ],
                },
                {
                    id: 6,
                    nome: "Módulo 6",
                    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                    thumbnail: "https://i.ytimg.com/vi/2G_mWfG0DZE/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            type: "video",
                            nome: "Aula 1",
                            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                            thumbnail: "https://i.ytimg.com/vi/2G_mWfG0DZE/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/2G_mWfG0DZE",
                            duracao: "00:05:00",
                            concluida: false,
                            materiais: [],
                        },
                    ],
                },
                {
                    id: 7,
                    nome: "Módulo 7",
                    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                    thumbnail: "https://i.ytimg.com/vi/2G_mWfG0DZE/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            type: "video",
                            nome: "Aula 1",
                            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam! Quod dolorum a aliquid necessitatibus?",
                            thumbnail: "https://i.ytimg.com/vi/2G_mWfG0DZE/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/2G_mWfG0DZE",
                            duracao: "00:05:00",
                            concluida: false,
                            materiais: [],
                        },
                    ],
                },
                {
                    id: 8,
                    nome: "Módulo 8",
                    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor, rem veniam laborum minima sequi fugiat sit quibusdam!",
                    thumbnail: "https://i.ytimg.com/vi/2G_mWfG0DZE/maxresdefault.jpg",
                    aulas: [
                        {
                            id: 1,
                            type: "video",
                            nome: "Aula 1",
                            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae nisi in eligendi cupiditate praesentium exercitationem dolor!",
                            thumbnail: "https://i.ytimg.com/vi/2G_mWfG0DZE/maxresdefault.jpg",
                            video: "https://www.youtube.com/embed/2G_mWfG0DZE",
                            duracao: "00:05:00",
                            concluida: false,
                            materiais: [],
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
        getModulo: (state) => (id) => {
            return state.modulos.find(modulo => modulo.id == id)
        },
    },
})