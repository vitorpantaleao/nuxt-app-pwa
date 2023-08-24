<template>
  <div class="banner">
    <NuxtImg src="https://placehold.co/600x400/000000/fff/?text=Banner" class="w-screen" />
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
    <NuxtImg src="https://placehold.co/600x400?text=Aula+01" class="" />
    <NuxtImg src="https://placehold.co/600x400?text=Aula+02" class="" />
    <NuxtImg src="https://placehold.co/600x400?text=Aula+03" class="" />
    <NuxtImg src="https://placehold.co/600x400?text=Aula+04" class="" />
  </div>
  <NuxtImg src="https://placehold.co/600x200/77c4ff/fff?text=Banner" class="w-screen" />
</template>

<script setup>
  useHead({
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My custom description'
      }
    ]
  })
</script>