<script setup lang="ts">
import Resume from '~/../resume.json'

</script>

<template>
  <div>
    <h3 mb-2>
      Projects
    </h3>
    <div grid grid-cols-2 gap-2 text-dark-100>
      <div v-for="project in Resume.projects" :key="project.name">
        <div font-medium>
          {{ project.name }}
        </div>
        <div prose text-sm mt-1>
          {{ project.description }}
        </div>
        <div mt-2 text-sm>
          <a target="_blank" :href="project.url">Visit Project</a>
        </div>
      </div>
    </div>
  </div>
</template>
