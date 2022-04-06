<script setup lang="ts">
import Resume from '~/../resume.json'
</script>

<template>
  <div>
    <h3 mb-2>
      Education
    </h3>
    <div v-for="item in Resume.education" :key="item.institution">
      <div text-sm op70>
        {{ item.startDate }} to {{ item.endDate }}
      </div>
      <div font-medium>
        {{ item.area }}, {{ item.studyType }}
      </div>
      <div op80>
        {{ item.institution }}
      </div>
    </div>
  </div>
</template>
