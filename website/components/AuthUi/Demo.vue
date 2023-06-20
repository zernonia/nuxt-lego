<script setup lang="ts">
function handleSelectProvider(provider: string) {
  // return the selected provider
}

function handleSubmit(payload: { [key: string]: any }) {
  // in this case payload will return { email: string, password: string }
}
</script>

<template>
  <LegoAuth
    class="max-w-96 w-full bg-white border rounded-2xl px-8 py-10 shadow-sm"
    :hide-provider-label="true"
    :providers="['twitter', 'google', 'facebook']"
  >
    <LegoAuthHeader>
      <template #logo>
        <img src="/logo.svg" alt="NuxtLego" class="w-10">
      </template>

      <h2 class="mt-4 font-semibold text-xl">
        Create your account
      </h2>
      <p class="text-gray-400 text-sm mt-1">
        to continue to NuxtLego
      </p>
    </LegoAuthHeader>

    <div class="flex space-x-2 w-full mt-8">
      <LegoAuthSocialProviders
        class="w-full px-4 py-3 border bg-white hover:bg-gray-50 transition rounded-lg text-xl flex justify-center"
        @select="handleSelectProvider"
      />
    </div>

    <LegoAuthForm class="mt-10 text-sm" @submit="handleSubmit">
      <LegoAuthFormInputText
        name="email"
        type="email"
        label="Email Address"
        class="block border w-full outline-blue-400 px-4 py-2 rounded-lg mt-1 mb-2"
      />
      <LegoAuthFormInputText
        name="password"
        type="password"
        label="Password"
        class="block border w-full outline-blue-400 px-4 py-2 rounded-lg mt-1 mb-2"
      />

      <LegoAuthFormButton
        label="Continue"
        class="bg-blue-400 hover:bg-blue-500 transition mt-2 px-4 py-2.5 rounded-lg w-full text-sm text-white"
      />
    </LegoAuthForm>

    <div class="mt-10 text-sm text-gray-400">
      Have an account?
      <NuxtLink class="text-blue-400 hover:text-blue-500 underline" to="/">
        Sign In
      </NuxtLink>
    </div>
  </LegoAuth>
</template>
