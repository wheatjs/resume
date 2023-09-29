<script setup lang="ts">
defineProps<{
  title: string
  company: string
  startDate: string
  endDate: string
  url: string
}>()
</script>

<template>
  <div mt4>
    <div flex flex-row items-center gap-1>
      <a :href="url">
        <h2 text-lg m-0 font-medium text-dark-50 border="b-1 dashed dark-50/50">{{ company }}</h2>
      </a>
      <i i="ph-dot-outline-fill" op40 />
      <div text-lg text-dark-50 font-medium op75>{{ title }}</div>
    </div>
    <div flex flex-row items-center gap-1>
      <div text-sm text-dark-50 font-medium op75>{{ startDate }} - {{ endDate }}</div>
    </div>
    <div prose max-w-full>
      <slot />
    </div>
  </div>
</template>
