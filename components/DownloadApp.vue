<template>
    <div class="fixed bottom-0 left-0 right-0 md:left-[15%] md:right-[15%] z-[99] p-4 mb-4 mx-5 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800">
        <div class="flex items-center">
            <svg class="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <h3 class="text-lg font-medium">Baixe nosso APP</h3>
        </div>
        <div class="mt-2 mb-4 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem aspernatur iste nam dignissimos repudiandae sunt sit cumque porro eum ex. Magnam ipsum, ratione nam error minus dolor nesciunt quos fuga!
        </div>
        <div class="flex">
            <button class="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id="enable-banner-install" v-show="showInstallButton" @click="installApp">
                Download
            </button>
            <button class="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800">
                Não, obrigado
            </button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const showInstallButton = ref(false);
    let deferredPrompt = null;

    const installApp = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the prompt');
          } else {
            console.log('User dismissed the prompt');
          }
          deferredPrompt = null;
        });
      }
    };

    onMounted(() => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(() => {
          console.log('Service Worker Registered');
        });
      }

      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('beforeinstallprompt...');
        showInstallButton.value = true;
        e.preventDefault();
        deferredPrompt = e;
      });
    });

    return {
      showInstallButton,
      installApp,
    };
  },
};
</script>
