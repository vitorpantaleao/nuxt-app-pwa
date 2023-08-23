<script setup>
const route = useRoute()
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<template>
  <div>
    <h1>Hello World!</h1>

    <div>
      <h2>Color mode: {{ $colorMode.value }}</h2>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>

    <p>Rota atual: {{ route.path }}</p>

    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>
