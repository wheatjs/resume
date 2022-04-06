<script setup lang="ts">
import Resume from '~/../resume.json'
</script>

<template>
  <div>
    <h3 mb-2>
      Skills
    </h3>
    <div space-y-4>
      <div v-for="skill in Resume.skills" :key="skill.name">
        <div text-sm op80 font-bold>
          {{ skill.name }}
        </div>
        <div text-sm font-medium op80>
          {{ skill.keywords.join(', ') }}
        </div>
      </div>
    </div>
  </div>
</template>
