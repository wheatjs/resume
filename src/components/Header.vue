<script setup lang="ts">
import Resume from '~/../resume.json'
</script>

<template>
  <div>
    <div text-6xl flex flex-col font-sans pt-10 text-dark-100>
      <span>{{ Resume.basics.name.split(' ')[0] }}</span>
      <span font-bold>{{ Resume.basics.name.split(' ')[1] }}</span>
    </div>
    <div bg-dark-100 text-white font-sans font-100 px-4 py-1 mt-2 inline-flex>
      {{ Resume.basics.label }}
    </div>
    <div mt-2 text-sm op80>
      <a :href="`mailto:${Resume.basics.email}`">
        {{ Resume.basics.email }}
      </a>
    </div>
    <div flex flex-row items-center space-x-2 mt-2>
      <a
        v-for="profile in Resume.basics.profiles"
        :key="profile.network"
        target="_blank"
        :href="profile.url"
        op70
        border-0
      >
        <div
          w-5
          h-5
          :class="{
            'i-carbon-logo-twitter': profile.network.toLowerCase() === 'twitter',
            'i-carbon-logo-github': profile.network.toLowerCase() === 'github',
            'i-carbon-logo-linkedin': profile.network.toLowerCase() === 'linkedin',
            'i-carbon-user-avatar': profile.network.toLowerCase() === 'website',
          }"
        />
      </a>
    </div>
  </div>
</template>
