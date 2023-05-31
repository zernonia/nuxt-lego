<script setup lang="ts">
import { rootKey } from './.keys'
import type { Provider } from './.types'

const props = defineProps<{
  hideProviderLabel?: boolean
  providers?: Provider[]
}>()

provide(rootKey, props)
</script>

<template>
  <div>
    <slot>
      <LegoAuthHeader />

      <LegoAuthSocialProvider provider="google" />
      <LegoAuthSocialProvider provider="facebook" />
      <LegoAuthSocialProvider provider="twitter" />
      <LegoAuthSocialProvider provider="github" />
      <LegoAuthSocialProvider provider="tiktok" />
      <LegoAuthSocialProvider provider="azure" />

      <LegoAuthForm>
        <LegoAuthFormInputText
          name="email"
          type="email"
          label="Email Address"
        />
        <LegoAuthFormInputText
          name="password"
          type="password"
          label="Password"
        />

        <LegoAuthFormButton />
      </LegoAuthForm>
    </slot>
  </div>
</template>
