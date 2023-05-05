---
title: Static Tweet
description: Primitive component to render static tweet.
---

## Basic example

::demo-twitter{id="1645825178763501568"}
::

```vue[/components/CustomStaticTweet.vue]
<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<template>
  <LegoTwitter
    :tweet-id="id"
    v-slot="{ url }"
    class="max-w-[550px] bg-white p-4 rounded-xl border"
  >
    <div class="flex justify-between">
      <LegoTwitterUser v-slot="{ user }">
        <div class="flex items-center">
          <LegoTwitterUserAvatar>
            <span></span>
          </LegoTwitterUserAvatar>
          <div class="ml-3">
            <p class="font-semibold leading-5">{{ user.name }}</p>
            <p class="text-gray-400">@{{ user.screen_name }}</p>
          </div>
        </div>
      </LegoTwitterUser>

      <LegoTwitterLink :href="url">
        <Icon name="uil:twitter" class="text-4xl text-blue-300"></Icon>
      </LegoTwitterLink>
    </div>
    <LegoTwitterText
      class="mt-4 text-lg"
      link-class="text-blue-500 hover:underline"
    ></LegoTwitterText>

    <LegoTwitterMedia
      class="mt-2 rounded-xl overflow-hidden border max-h-[290px]"
    ></LegoTwitterMedia>
    <LegoTwitterSummaryCard
      class="mt-2 border rounded-xl overflow-hidden bg-white hover:bg-gray-100 transition"
      v-slot="{ title, description, domain }"
    >
      <div class="px-4 py-2 h-full">
        <p class="text-sm text-gray-400">{{ domain }}</p>
        <p>{{ title }}</p>
        <p class="text-sm text-gray-400">{{ description }}</p>
      </div>
    </LegoTwitterSummaryCard>

    <div class="mt-2 text-gray-400 flex justify-between">
      <LegoTwitterCreatedAt></LegoTwitterCreatedAt>
      <LegoTwitterTerms></LegoTwitterTerms>
    </div>

    <div class="my-2 h-[1px] w-full bg-gray-200"></div>

    <LegoTwitterAction class="text-gray-500 flex space-x-4">
      <LegoTwitterActionLove
        class="group flex items-center font-semibold text-sm space-x-1"
        v-slot="{ favorite_count }"
      >
        <LegoTwitterActionLoveIcon
          class="text-pink-600 group-hover:bg-pink-100 p-1.5 rounded-full w-8 h-8"
        ></LegoTwitterActionLoveIcon>
        <span class="group-hover:text-pink-600 group-hover:underline">
          {{ favorite_count }}
        </span>
      </LegoTwitterActionLove>

      <LegoTwitterActionReply
        class="group flex items-center font-semibold text-sm space-x-1"
      >
        <LegoTwitterActionReplyIcon
          class="text-blue-400 group-hover:bg-blue-100 p-1.5 rounded-full w-8 h-8"
        ></LegoTwitterActionReplyIcon>
        <span class="group-hover:text-blue-400 group-hover:underline">
          Reply
        </span>
      </LegoTwitterActionReply>
      <LegoTwitterActionCopy
        class="group flex items-center font-semibold text-sm space-x-1"
        v-slot="{ copied }"
      >
        <LegoTwitterActionCopyIcon
          class="group-hover:bg-green-100 group-hover:text-green-500 p-1.5 rounded-full w-8 h-8"
        ></LegoTwitterActionCopyIcon>

        <span class="group-hover:text-green-400 group-hover:underline">
          {{ copied ? "Copied!" : "Copy link" }}
        </span>
      </LegoTwitterActionCopy>
    </LegoTwitterAction>

    <LegoTwitterReplies
      class="py-2 px-4 mt-2 flex justify-center text-sm font-medium text-blue-500 bg-white hover:bg-blue-50 transition rounded-3xl border"
    ></LegoTwitterReplies>
  </LegoTwitter>
</template>

```

## Anatomy

```vue
<template>
  <LegoTwitter :tweet-id="tweetId">
    <LegoTwitterUser v-slot="{ user }" />
    <LegoTwitterText />

    <LegoTwitterMedia />
    <LegoTwitterSummaryCard v-slot="{ title, description, domain }" />

    <LegoTwitterCreatedAt />
    <LegoTwitterTerms />

    <LegoTwitterAction>
      <LegoTwitterActionLove v-slot="{ favorite_count }" />

      <LegoTwitterActionReply />
      <LegoTwitterActionCopy />
    </LegoTwitterAction>

    <LegoTwitterReplies />
  </LegoTwitter>
</template>
```

## API Reference

### Root

Wrapper that provide the information required for the child component.

| Prop     | Default | Types    | Description                        |
| -------- | ------- | -------- | ---------------------------------- |
| tweet-id | -       | `string` | ID of the tweet you want to render |
