<script setup lang="ts">

</script>

<template>
  <div grid grid-cols="lg:[min-content_auto]" gap-16 p8 max-w-5xl mx-auto>
    <div>
      <slot name="left" />
    </div>
    <div>
      <slot />
    </div>
  </div>  
</template>
