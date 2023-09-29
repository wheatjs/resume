<script setup lang="ts">
defineProps<{
  university: string
  degree: string
  startDate: string
  endDate: string
}>()
</script>

<template>
  <div mt2>
    <div flex flex-row items-center gap-1>
        <h2 text-lg m-0 font-medium text-dark-50>{{ degree }}</h2>
      <i i="ph-dot-outline-fill" op40 />
      <div text-lg text-dark-50 font-medium op75>{{ university }}</div>
    </div>
    <div flex flex-row items-center gap-1 my1>
      <div text-sm text-dark-50 font-medium op75>{{ startDate }} - {{ endDate }}</div>
    </div>
    <div prose>
      <slot />
    </div>
  </div>
</template>
