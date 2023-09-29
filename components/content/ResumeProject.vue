<script setup lang="ts">
defineProps<{
  title: string
  stars: string
  url?: string
  repo?: string
}>()
</script>

<template>
  <div py2>
    <h2 text-base font-bold text-dark-50 op92>{{ title }}</h2>
    <div flex flex-row items-center space-x-2 text="dark-50/70">
      <div flex flex-row items-center>
        <i i="ic-round-star" op62 mr1 />
        <span text-dark-50 op70 font-700>{{ stars }}</span>
      </div>

      <template v-if="repo">
        <a :href="repo">
          <i i="mdi-github" op50 />
        </a>
      </template>

      <template v-if="url">
        <a :href="url">
          <i i="material-symbols-arrow-outward" op50 />
        </a>
      </template>
    </div>

    <div mt1 text="dark-50/70">
      <slot></slot>
    </div>
  </div>
</template>
