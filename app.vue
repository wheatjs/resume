<template>
  <div mx-auto>
    <NuxtPage />
  </div>
</template>

<style>
html {
  --at-apply: font-sans text-dark-500;
}

a:hover {
  --at-apply: text-green-500 op100;
}

i {
  --at-apply: block;
}

p {
  --at-apply: line-height-relaxed text-base text-dark-50;
}

p a {
  --at-apply: text-green-500 underline-dashed border-b-2 border-dashed border-green-200;
}

h1 {
  --at-apply: text-base font-700 mb3 text-green-900/60 b-l-4 pl2 -ml4 border-green-200 from-green-100/30 to-white bg-gradient-to-r;
  /* --at-apply: text-lg font-700 mb3 text-dark-50/90; */
}

* + h1 {
  --at-apply: mt8;
}

ul {
  --at-apply: list-circle;
  list-style-type: circle !important;
  padding-inline-start: 40px;
  margin-top: -0.5em !important;
}

ul li {
  --at-apply: mb-1 text-dark-50;
}

.print-only {
  display: none;
}

@media print {
  .print-only {
    display: inherit;
  }
  .no-print {
    display: none;
  }
}
</style>
