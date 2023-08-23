<script setup>
const route = useRoute()
const colorMode = useColorMode()

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

<template>
  <div class="bg-slate-600 dark:bg-black">
    <h1>Hello World!</h1>
    <NuxtLink to="/about" class="bg-red-700">About</NuxtLink>

    <div class="bg-">
      <h2>Color mode: {{ $colorMode.value }}</h2>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>

    <p>Rota atual: {{ route.path }}</p>

  </div>
</template>
