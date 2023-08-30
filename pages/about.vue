<template>
    <div>
        <div>
            <picture>
                <source srcset="https://placehold.co/768x400/000000/fff/?text=Sobre" media="(max-width: 768px)" />
                <NuxtImg src="https://placehold.co/1920x500/000000/fff/?text=Sobre" class="w-screen" />
            </picture>
        </div>
        <p>Rota atual: {{ route.path }}</p>
    </div>
</template>

<script setup>
const route = useRoute()
</script>