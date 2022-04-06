<script setup lang="ts">
import Resume from '~/../resume.json'
</script>

<template>
  <div>
    <h3 mb-2>
      Work Experience
    </h3>
    <div space-y-6 text-dark-100>
      <div v-for="item in Resume.work" :key="item.name">
        <div text-sm op80>
          {{ item.startDate }} to {{ item.endDate }}
        </div>
        <div text-xl font-medium>
          <a :href="item.url">
            {{ item.name }}
          </a>
        </div>
        <div text-sm font-medium op80>
          {{ item.position }}
        </div>
        <div prose font-serif mt-2>
          {{ item.summary }}
        </div>
      </div>
    </div>
  </div>
</template>
