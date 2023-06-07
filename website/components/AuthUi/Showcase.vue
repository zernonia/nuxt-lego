<script setup lang="ts"></script>

<template>
  <ShowcaseCard slug="auth-ui">
    <template #image>
      <div class="mt-20 relative">
        <div
          class="absolute -top-16 group-hover:-top-20 right-22 group-hover:right-24 text-4xl text-blue-200 group-hover:text-blue-400 transition-all"
        >
          <Icon name="ion:logo-facebook" />
        </div>
        <div
          class="absolute -top-16 group-hover:-top-20 left-22 group-hover:left-24 text-4xl text-blue-200 group-hover:text-blue-400 transition-all"
        >
          <Icon name="ion:logo-google" />
        </div>
        <div
          class="absolute -top-12 group-hover:-top-14 left-36 group-hover:left-38 text-4xl text-blue-200 group-hover:text-blue-400 transition-all"
        >
          <Icon name="ion:logo-github" />
        </div>
        <div
          class="absolute -top-12 group-hover:-top-14 right-36 group-hover:right-38 text-4xl text-blue-200 group-hover:text-blue-400 transition-all"
        >
          <Icon name="ion:logo-twitter" />
        </div>
        <div
          class="bg-white relative z-10 bg-white w-40 h-12 text-gray-300 group-hover:text-blue-400 transition text-sm border border-gray-200 group-hover:border-blue-400 rounded-xl flex items-center justify-center"
        >
          Sign Up
        </div>
      </div>
    </template>
  </ShowcaseCard>
</template>
