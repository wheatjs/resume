<script setup lang="ts">
import Resume from '~/../resume.json'
import About from '~/../About.md'
</script>

<template>
  <div max-w-95ch w-full mx-auto grid grid-cols-5 gap-8>
    <div col-span-3>
      <h3 mt-10>
        About
      </h3>
      <div font-serif prose>
        <About />
      </div>
      <Work mt-8 />
      <Projects mt-8 />
    </div>
    <div col-span-2 space-y-8>
      <Header />
      <Education />
      <Skills />
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none !important;
  border-bottom: 1px dashed;
  @apply border-dark-50/50 hover:border-green-500;
}

h3 {
  @apply font-sans font-100 !font-bold uppercase !text-lg bg-dark-200 inline-block text-light-100 px-2;
}
</style>
