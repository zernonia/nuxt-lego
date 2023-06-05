<script setup lang="ts"></script>

<template>
  <ShowcaseCard slug="auth-ui">
    <template #image>
      <div>
        <div
          class="absolute top-16 group-hover:top-14 right-24 group-hover:right-22 text-4xl text-blue-200 group-hover:text-blue-400 transition-all"
        >
          <Icon name="ion:logo-facebook" />
        </div>
        <div
          class="absolute top-16 group-hover:top-14 left-24 group-hover:left-22 text-4xl text-blue-200 group-hover:text-blue-400 transition-all"
        >
          <Icon name="ion:logo-google" />
        </div>
        <div
          class="absolute top-10 group-hover:top-8 left-38 group-hover:left-36 text-4xl text-blue-200 group-hover:text-blue-400 transition-all"
        >
          <Icon name="ion:logo-github" />
        </div>
        <div
          class="absolute top-10 group-hover:top-8 right-38 group-hover:right-36 text-4xl text-blue-200 group-hover:text-blue-400 transition-all"
        >
          <Icon name="ion:logo-twitter" />
        </div>
        <div
          class="bg-white relative z-10 bg-white mt-20 w-40 h-12 text-gray-300 group-hover:text-blue-400 transition text-sm border border-gray-200 group-hover:border-blue-400 rounded-xl flex items-center justify-center"
        >
          Sign Up
        </div>
      </div>
    </template>
  </ShowcaseCard>
</template>
