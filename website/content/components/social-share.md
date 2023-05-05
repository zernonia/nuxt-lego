---
title: Social Share
description: Primitive component to allow easy sharing for different social media providers.
---

## Basic example

::demo-social
::

```vue[/components/CustomSocialShare.vue]
<script setup lang="ts">
defineProps<{
  url?: string;
  text?: string;
}>();
</script>

<template>
  <LegoSocial :url="url" class="text-3xl flex space-x-3">
    <LegoSocialLink
      class="text-blue-300 hover:text-blue-400 transition"
    ></LegoSocialLink>
    <LegoSocialFacebook
      class="text-blue-300 hover:text-blue-400 transition"
    ></LegoSocialFacebook>
    <LegoSocialTwitter
      class="text-blue-300 hover:text-blue-400 transition"
      :text="text"
    ></LegoSocialTwitter>
    <LegoSocialLinkedIn
      class="text-blue-300 hover:text-blue-400 transition"
      :text="text"
    ></LegoSocialLinkedIn>
  </LegoSocial>
</template>
```

## Anatomy

```vue
<template>
  <LegoSocial>
    <LegoSocialLink></LegoSocialLink>
    <LegoSocialFacebook></LegoSocialFacebook>
    <LegoSocialTwitter text="Hello world!"></LegoSocialTwitter>
    <LegoSocialLinkedIn text="Hello world!"></LegoSocialLinkedIn>
  </LegoSocial>
</template>
```

## API Reference

### Root

Wrapper that provide the information required for the child component.

| Prop | Default | Types    | Description                              |
| ---- | ------- | -------- | ---------------------------------------- |
| url  | -       | `String` | Default to current route if not provided |

### Twitter, LinkedIn

These 2 child component has extra props, as such:

| Prop | Default | Types    | Description                                          |
| ---- | ------- | -------- | ---------------------------------------------------- |
| text | -       | `String` | Default text value when user click on sharing button |
