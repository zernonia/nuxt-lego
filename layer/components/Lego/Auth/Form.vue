<script setup lang="ts">
const emits = defineEmits<{
  (e: 'submit', payload: { [key: string]: any }): void
}>()

function handleSignIn(ev: Event) {
  ev.preventDefault()
  const form = ev.target as HTMLFormElement
  if (!form)
    return
  const formData = new FormData(form)

  emits(
    'submit',
    Object.fromEntries(formData) as { email: string; password?: string },
  )
}
</script>

<template>
  <form @submit="handleSignIn">
    <slot />
  </form>
</template>
