<script setup lang="ts">
const isShowingMenu = ref(false)

watch(isShowingMenu, (n) => {
  if (n)
    document.body.classList.add('overflow-y-hidden')
  else document.body.classList.remove('overflow-y-hidden')
})

watch(
  () => useRoute().path,
  () => {
    isShowingMenu.value = false
  },
)
</script>

<template>
  <header class="px-4 md:px-6 py-4 flex items-center justify-between z-10">
    <h1>
      <NuxtLink
        to="/"
        class="text-2xl md:text-3xl font-bold flex items-center space-x-2"
      >
        <img src="/logo.svg" alt="NuxtLego" class="w-8 md:w-10">
        <span>NuxtLego</span>
      </NuxtLink>
    </h1>

    <div class="flex items-center">
      <NuxtLink to="https://github.com/zernonia/nuxt-lego" target="_blank">
        <Icon class="text-3xl" name="uil:github" />
      </NuxtLink>
      <button
        class="block md:hidden p-1 ml-1"
        @click="isShowingMenu = !isShowingMenu"
      >
        <Icon name="ph:list-fill" class="text-2xl" />
      </button>
    </div>

    <Transition
      enter-active-class="overflow-y-hidden duration-300 ease-out"
      enter-from-class="overflow-y-hidden transform  max-h-0 opacity-0"
      enter-to-class="overflow-y-hidden max-h-screen opacity-100"
      leave-active-class="overflow-y-hidden duration-300 ease-in"
      leave-from-class="overflow-y-hidden max-h-screen opacity-100"
      leave-to-class="overflow-y-hidden transform max-h-0 opacity-0"
    >
      <div
        v-if="isShowingMenu"
        class="z-20 fixed top-16 left-0 bg-white bg-opacity-50 backdrop-blur-md w-screen h-screen overflow-y-auto"
        @click.self="isShowingMenu = false"
      >
        <div class="bg-white p-4 border-b rounded-b-xl">
          <SideNavBar />
        </div>
      </div>
    </Transition>
  </header>
</template>
