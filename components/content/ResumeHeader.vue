<script setup lang="ts">

</script>

<template>
  <div flex flex-col justify-center items-center>
    <header text-3xl font-medium text-dark-50 pt4 whitespace-nowrap>Jacob Clevenger</header>
    <div mb2 flex flex-row items-center gap-1>
      <a href="mailto:jacobrclevenger@gmail.com" text-sm text-dark-50 font-medium op75>
        jacobrclevenger@gmail.com
      </a>
    </div>
    <div flex flex-row items-center gap-2>
      <a target="_blank" flex flex-row items-center gap-0.5 href="https://www.linkedin.com/in/jacob-clevenger-10775a112/" text-base text-dark-50>
        <i i="mdi-linkedin" op75 />
        <span mt-0.5 op75>
          <!-- linkedin.com/in/jacob-clevenger-10775a112/ -->
        </span>
      </a>
      <a target="_blank" flex flex-row items-center gap-0.5 href="https://github.com/wheatjs" text-base text-dark-50>
        <i i="mdi-github" op75 />
        <span op75>
          <!-- github.com/wheatjs -->
        </span>
      </a>
      <a target="_blank" flex flex-row items-center gap-0.5 href="https://wheatjs.me" text-base text-dark-50>
        <i i="mdi-account-circle" op75 />
        <span op75>
          <!-- github.com/wheatjs -->
        </span>
      </a>
    </div>
  </div>  
</template>
