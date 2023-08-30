<template>
  <div>
    <div>
      <picture>
        <source srcset="https://placehold.co/768x400/000000/fff/?text=Mobile" media="(max-width: 768px)" />
        <NuxtImg src="https://placehold.co/1920x500/000000/fff/?text=Desktop" class="w-screen" loading="lazy" />
      </picture>
    </div>
    <div class="w-screen md:w-full mx-auto px-4 md:px-12">
      <h2 class="text-4xl py-4 font-sans decoration-slate-500 text-slate-800 font-semibold">Módulos</h2>
      <ModulesListModules />
      <div>
        <picture>
          <source srcset="https://placehold.co/768x250/77c4ff/fff/?text=Mobile" media="(max-width: 768px)" />
          <NuxtImg src="https://placehold.co/1024x200/77c4ff/fff?text=Desktop" class="w-screen" loading="lazy" />
        </picture>
      </div>
    </div>
  </div>
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