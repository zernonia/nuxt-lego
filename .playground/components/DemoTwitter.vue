<script setup lang="ts"></script>

<template>
  <LegoTwitter
    tweet-id="1562424485482942465 "
    class="max-w-[550px] p-4 rounded-xl border"
  >
    <LegoTwitterUser v-slot="{ user }">
      <div class="flex items-center">
        <img
          class="rounded-full w-12 h-12"
          :src="user.profile_image_url_https"
          :alt="user.name"
        />
        <div class="ml-3">
          <p class="font-semibold leading-5">{{ user.name }}</p>
          <p class="text-gray-400">@{{ user.screen_name }}</p>
        </div>
      </div>
    </LegoTwitterUser>
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
      <div class="px-4 py-2">
        <p class="text-sm text-gray-400">{{ domain }}</p>
        <p>{{ title }}</p>
        <p class="text-sm text-gray-400">{{ description }}</p>
      </div>
    </LegoTwitterSummaryCard>

    <LegoTwitterCreatedAt class="mt-4 text-gray-400"></LegoTwitterCreatedAt>

    <LegoTwitterAction class="mt-4 flex space-x-4">
      <LegoTwitterActionLove
        class="text-pink-600 flex items-center font-semibold text-sm space-x-2 hover:underline"
      ></LegoTwitterActionLove>
      <LegoTwitterActionReply
        class="text-blue-400 flex items-center font-semibold text-sm space-x-2 hover:underline"
      ></LegoTwitterActionReply>
      <LegoTwitterActionCopy
        class="text-gray-500 hover:text-green-500 flex items-center font-semibold text-sm space-x-2 hover:underline"
      ></LegoTwitterActionCopy>
    </LegoTwitterAction>

    <LegoTwitterReplies
      class="py-2 px-4 mt-2 flex justify-center text-sm font-medium text-blue-500 bg-white hover:bg-blue-50 transition rounded-3xl border"
    ></LegoTwitterReplies>
  </LegoTwitter>
</template>
