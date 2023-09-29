<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div flex flex-row items-center pb3>
    <div w-20 text-dark-200 text-right font-bold>{{ title }}</div>
    <div pl2><slot /></div>
  </div>
</template>
